import axios from "axios"
import { Dispatch } from "react"
import { UserAction, UserActionTypes } from "../../types/user"

export const fetchUsers = () => {
    // Отсюда возвращаем новую функцию, которая параметром принимает dispatch
    //Типизируем dispatch
    return async(dispatch: Dispatch<UserAction>) => {
        //Делаем запрос на сервер
        try{
            dispatch({type: UserActionTypes.FETCH_USERS})
            //Логика самого запроса
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch({
                type: UserActionTypes.FETCH_USERS_SUCCESS,
                payload: response.data
            })
            //В payload передаем данные, полученные от сервера
        }catch(e){
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей!'
            })
        }
    }
}
