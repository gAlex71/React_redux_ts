import { UserState, UserAction, UserActionTypes } from "../../types/user"

const defaultState:UserState = {
    users: [],
    loading: false,
    error: null
}

export const UserReducer = (state = defaultState, action: UserAction): UserState => {
    switch(action.type){
        //Будем подгружать action, когда будем вызывать пользователей с сервера
        case UserActionTypes.FETCH_USERS:
            return {users: [], loading: true, error: null}
        //Если загрузка прошла успешно, будем получать массив пользователей с сервера
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {users: action.payload, loading: false, error: null}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {users: [], loading: false, error: action.payload}
        //В случае если ни один из кейсов не сработал
        default:
            return state
    }
}