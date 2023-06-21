import axios from "axios";
import config from "../configuration/config";
const headerss = {
    "Content-Type": "application/json",
    'Accept': 'application/json',
    'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2QxMWE0ODE0Nzc0ODAwMDg4YzhhOTgiLCJmaXJzdE5hbWUiOiJGbG9yYSBHeW0iLCJsYXN0TmFtZSI6Ik93bmVyIiwidXNlcm5hbWUiOiJmbG9yYWd5bSIsImVtYWlsIjoiZmxvcmFneW1AZ21haWwuY29tIiwicHJlZml4IjoiKzkxIiwiY291bnRyeUNvZGUiOiJJTiIsInBob25lIjoiODc2OTQ1NTY1OSIsImltYWdlIjpudWxsLCJwYXNzd29yZCI6IiQyYSQxMCRjV0RkSXlTdGJ1MDM5UUg0QlVuTE91dDJkQXpYRHdtWHoydDgwWmJFaWNoRkltdWczM0tDbSIsImdyb3VwSWQiOiI2M2QxMTcxYmNhNjhjYTAwMDhhYzgyYjQiLCJvcmdhbml6YXRpb25JZCI6IjYzZDExYTQ2ZDk0NTI5MDAwODJhZDQ3YSIsImlzT3JnYW5pemF0aW9uT3duZXIiOnRydWUsImlzQXNzb2NpYXRpb25Pd25lciI6ZmFsc2UsImFzc29jaWF0aW9uSWQiOm51bGwsInN0YXR1cyI6ImFjdGl2ZSIsImNyZWF0ZWRCeSI6IjYwOGJlYzNkNDA3MGQ4MDAwODEyYmMyMiIsInVwZGF0ZWRCeSI6IjYwOGJlYzNkNDA3MGQ4MDAwODEyYmMyMiIsImNyZWF0ZWRBdCI6IjIwMjMtMDEtMjUgMTI6MDI6MTUiLCJ1cGRhdGVkQXQiOiIyMDIzLTAxLTI1IDEyOjAyOjE1IiwidGltZXpvbmUiOiI2M2Y3NDQyMDk2NGQ1Nzc1ZTIzYjRhMzYiLCJ6YXBpZXJLZXkiOiI2ZDAxNWIxYS1mM2IyLTQ0ZTEtODA2Ny01OGJjMWE2MDRkZTgiLCJpYXQiOjE2ODY5ODkxNzksImV4cCI6MTY4NzA3NTU3OX0.74KGcS_5eFfRduV9oUzUtnnRwWKgF4ABCifOD80dQj4`,
};

// notification list
export const NotificationGroupServices = {
    fatchNotificationGroupList: async() =>{
        // headers.Authorization = localStorage.getItem("");
        try {
            const result = await axios.get(config.notificationGroup, { headers: headerss });
            return result.data;
        } catch (e) {
            if(e.response && e.response.data && e.response.data.message) {
                console.log(e.response.data.message);
                throw new Error(e.response.data.message);
            } else if(e.response && e.response.data && typeof e.response.data == "string") {
                throw new Error(e.response.data);
            } else {
                console.log("Error", e.response);
                throw new Error(e.message + ". Please contact support.");
            }
        }
    }
}