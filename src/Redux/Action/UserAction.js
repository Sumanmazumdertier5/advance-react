import * as emmun from "../emmun"

export const UserAction = (users) =>{
    console.log("Action users",users)
    return {
        type: emmun.USER_LIST,
        payload: users
    }
}

export default UserAction