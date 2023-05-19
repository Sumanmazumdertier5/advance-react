import axios from "axios";
import config from "../configuration/config";
const headers = {
    "Content-Type": "application/json",
    'Accept': 'application/json',
    'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDNlNzkyZDVlMjU3NTI0ZTM1NjYwZDUiLCJmaXJzdE5hbWUiOiJmZ3hoIiwibGFzdE5hbWUiOiJzZmdoIGRmZ2giLCJ1c2VybmFtZSI6InNhbWltIiwiZW1haWwiOiJzYW1pbUByYmcuaW4iLCJwYXNzd29yZCI6IiQyYSQxMCRjQ2EuQVdTQkJBREpKTE1sdUdOdTlPMmhxclplYk1GOFV6VUJHVTlCMDhoVUhRUmpLaFNKeSIsImdyb3VwSWQiOiI2Mjc5ZmNlNzg4ZTkwODg0YmYxZmQwNzIiLCJvcmdhbml6YXRpb25JZCI6IjYwM2UzZjI0NWUyNTc1MjRlMzU2NjBjMiIsImNyZWF0ZWRCeSI6IjYwM2U3OTJkNWUyNTc1MjRlMzU2NjBkNSIsInVwZGF0ZWRCeSI6IjYwOGJlYzNkNDA3MGQ4MDAwODEyYmMyMiIsImNyZWF0ZWRBdCI6IjIwMjEtMDMtMDIgMTQ6NDU6MjEiLCJ1cGRhdGVkQXQiOjE2MjM2NjQzMjQ3NTgsInBob25lIjoiODk4OTg4OTg5OCIsImlzT3JnYW5pemF0aW9uT3duZXIiOnRydWUsInN0YXR1cyI6ImFjdGl2ZSIsInByZWZpeCI6IisxIiwiemFwaWVyS2V5IjoiNmExOTc0NTMtNjNkNC00ZDYzLTgyNWUtYTAwM2VjOWYyYWY1IiwiY291bnRyeUlkIjoiNjEyM2U1Nzg1MjViZDQ2MjIyNjY5YmYwIiwidGltZXpvbmUiOiI2M2Y3NDQyMDk2NGQ1Nzc1ZTIzYjRhMzYiLCJpbWFnZSI6ImM0NTE4M2I1LTFiMWUtNDI3NS05MzY5LWIyYjljOTAyODEzMV9vcmlnaW5hbF9TY3JlZW5zaG90IGZyb20gMjAyMi0wNC0xOCAxNS0wOC00Mi5wbmciLCJpYXQiOjE2ODE5OTE4NjYsImV4cCI6MTY4MjA3ODI2Nn0.k0BLarnKMfd9Tlxtnn7W2jPb6z_Z72sD4DbFpNZsHME"
};

// notification list
export const NotificationGroupServices = {
    fatchNotificationGroupList: async() =>{
        headers.Authorization = localStorage.getItem("");
        try{
            const result = await axios.get(config.notificationGroup, {headers: headers});
            return result.data;
        }
        catch (e){
            console.log(e);
            throw new Error();
        }
    }
}