import * as UserActionCreators from './user'
import * as TodoActionCreators from './todo'

//Создаем объект, который объединяет два ActionCreator
export default{
    ...UserActionCreators,
    ...TodoActionCreators
}