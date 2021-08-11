import { createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { TodoReducers } from './reducers/TodoReducers';

console.log(TodoReducers)

const reducer = combineReducers({
    Todo : TodoReducers
})

console.log(reducer)

const middleware = [thunk]

// const initialState = {}

const store = createStore(
        reducer,
        
        composeWithDevTools(applyMiddleware(...middleware)))

console.log(store)

export default store