import "./App.css";
import { TiDelete } from "react-icons/ti";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoActions";

//useDispatch is use to call the action from our application
//useSelector is use to access global state to our application

function App() {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();

  const Todo = useSelector((state) => state.Todo);

  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  return (
    <div className="App">
      <div className="App-header">
        <h2> To-do List (using react-redux) </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="enter-todo"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="btn">
            Add
          </button>
        </form>
        {todos &&
          todos.map((eachTodo) => {
            if (eachTodo.length <= 1) {
              return <span>Cant enter blank todo</span>;
            } else {
              return (
                <ul className="allTodos">
                  <li key={eachTodo.id} className="singleTodo">
                    <span fontSize="10px">{eachTodo.todo}</span>
                    <span>  <TiDelete
                      color="white"
                      fontSize="20px"
                      style={{ paddingLeft: 10 }}
                      onClick={() => dispatch(RemoveTodoAction(eachTodo))}
                    />
                    </span>
                   
                  </li>
                </ul>
              );
            }
          })}
      </div>
    </div>
  );
}

export default App;
