import {useEffect, useState} from "react";
import {NotificationGroupServices} from "../services/notificationServices";
import NoticicationGroup from "./notificationGroup";

const NotificationUserList = ()=>{
    const [notificationGroupList, setNotificationGroupList] = useState([]);
    const [userList, setUserList] = useState([]);
    const notificationList = async()=>{
        try{
            let result = await NotificationGroupServices.fatchNotificationGroupList();
            if(result){
                console.log("Notification result", result?.data[0]);
                setNotificationGroupList(result?.data);
                if(result?.data[0] !== undefined){
                    setUserList(result?.data[0].users)
                }
            }
        } catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        notificationList();
    },[]);
    return(
        <>
            <div className="d-flex">
                <h3>Notification user list</h3>
                <button >Add user</button>
            </div>
            <div className="notificationGroupList">
                <ul>
                {                    
                    notificationGroupList.length && userList && notificationGroupList.filter(item => item._id !== undefined )? (
                        <>
                            {
                                userList.length && userList.filter((item) => item._id !== undefined).map((item, i)=>{
                                    return(
                                        <li>
                                            <p>{item?.firstName} {item?.lastName}</p>
                                            <p>{item?.phone}</p>
                                            <p>{item?.email}</p>
                                            <p>{item.sms && "SMS"} <span>{item?.sms && item?.email && "and"}</span>{item.email && "EMAIL"}</p>
                                            <button >Edit</button>
                                        </li>
                                    )
                                })
                            }
                        </>
                    ) : <>
                        <h3>No record is there</h3>
                    </>
                }
                
                </ul>
                
            </div>
            <NoticicationGroup notificationGroupList={notificationGroupList}/>
        </>
    )
}

export default NotificationUserList;