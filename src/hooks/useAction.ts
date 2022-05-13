import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from '../store/action-creators/'

//Мы связываем actionCreators с dispatch, нам его не надо будет вызвать, только actionCreators
export const UseActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}