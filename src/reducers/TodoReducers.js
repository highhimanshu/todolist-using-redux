/*
-> Action ka jo parameter hai wo reducer leta hai taaki store ko update kar sake
-> Action ke andar 2 parameter rehta hai
const exampleAction = {
    type : "ADD_TODO", --> helps to judge which switch case i.e action needs to be execute
    payload : "Learn redux" --> passes data to update the store (optional)
}
*/

export const TodoReducers = (state = {todos : [] }, action) => {

    switch(action.type){
        case "ADD_TODO" :
            return { todos : action.payload}

        case "REMOVE_TODO":
            return { todos : action.payload}

        default :
        return state
    }
} 