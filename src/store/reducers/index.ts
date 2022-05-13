//Объединение всех reducers нашего приложения
import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { UserReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user: UserReducer,
    todo: todoReducer
})

//Получаем тип нашего reducer, и далее в хуке будем работать с типизированным useSelector
export type RootState = ReturnType<typeof rootReducer>