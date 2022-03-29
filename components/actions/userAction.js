import axios from "axios";
export function fetchUsers() {
    return (dispatch) => {
        dispatch({ type: "FETCH_USERS", payload: axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => res.data) })
    }
}