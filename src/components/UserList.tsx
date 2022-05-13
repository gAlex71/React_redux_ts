import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import { UseActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers } from "../store/action-creators/user";

const UserList: React.FC = () => {
    //Выцепляем данные из состояния с помощью хука, нам нужен только массив users, но его не существует
    //Дефолтный хук с типами не дружит, поэтому в корневом reducer используем хук для типов, и создаем свой хук
    const {users, loading, error} = useTypedSelector(state => state.user)
    const {fetchUsers} = UseActions()

    useEffect(() => {
        //Передаем функцию получения пользователей с сервера
        fetchUsers()
    }, [])

    if(loading){
        return <h1>Идет загрузка</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }

    return(
        <div>
            {users.map(user => 
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    )
}

export default UserList