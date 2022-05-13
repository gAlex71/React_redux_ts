import axios from "axios"
import { Dispatch } from "react"
import { TodoAction, TodoActionTypes } from "../../types/todo"

export const fetchTodos = (page = 1, limit = 10) => {
    // Отсюда возвращаем новую функцию, которая параметром принимает dispatch
    //Типизируем dispatch
    return async(dispatch: Dispatch<TodoAction>) => {
        //Делаем запрос на сервер
        try{
            dispatch({type: TodoActionTypes.FETCH_TODO})
            //Логика самого запроса
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos',{
                //Параметры, поступающие в URL(постраничный вывод)
                params: {_page: page, _limit: limit}
            })
            dispatch({
                type: TodoActionTypes.FETCH_TODO_SUCCESS,
                payload: response.data
            })
            //В payload передаем данные, полученные от сервера
        }catch(e){
            dispatch({
                type: TodoActionTypes.FETCH_TODO_ERROR,
                payload: 'Произошла ошибка при загрузке списка дел!'
            })
        }
    }
}

// Сразу сделаем второй actionCreator
//Меняем номер страницы
export function setTodoPage(page: number): TodoAction {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}