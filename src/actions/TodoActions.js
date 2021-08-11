//getState helps us to access our app state
//dispatch is the action which passes two agruments action and payload to the reducer

export const AddTodoAction = (todo) => (dispatch, getState) => {

  console.log(todo) //this todo is coming from App.js which user is typing on input box
    
  const { Todo: { todos }} = getState(); 

  console.log(todos)

  const hasTodo = todos.find((i) => i.todo === todo); //return booleanr

  if (!hasTodo && todo !== "") {
    dispatch({
      type: "ADD_TODO",
      payload: [{ id: todo, todo }, ...todos],
    });
  }
};

export const RemoveTodoAction = (todo) => (dispatch, getState) => {

  console.log("remove todo in todoaction folder")
  const {
    Todo: { todos },
  } = getState();


  dispatch({
    type: "REMOVE_TODO",
    payload: todos.filter((t) => t.id !== todo.id),
  });
};
