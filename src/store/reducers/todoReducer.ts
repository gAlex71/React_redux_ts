import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo";

//Дефолтное состояние
const defaultState: TodoState = {
    todos: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false
}

export const todoReducer = (state = defaultState, action: TodoAction): TodoState => {
    switch(action.type){
        case TodoActionTypes.FETCH_TODO:
            return {...state, loading: true}
        case TodoActionTypes.FETCH_TODO_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case TodoActionTypes.FETCH_TODO_ERROR:
            return {...state, loading: false, error: action.payload}
        //Только перезаписываем номер страницы
        case TodoActionTypes.SET_TODO_PAGE:
            return {...state, page: action.payload} 
        default:
            return state
    }
}