import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchUsers} from '../store/action-creators/user'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(fetchUsers, dispatch)
}