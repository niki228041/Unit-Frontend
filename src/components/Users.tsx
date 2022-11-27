import { useState,useEffect } from "react";
import axios from "../api/axios";

const Users=()=>{
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async()=>{
            try{
                const response = await axios.get('/User/GetAllUsers',{
                    signal:controller.signal
                });
                console.log(response.data.message);
                let newArr = response.data.message.split('|');
                console.log(newArr);
                isMounted && setUsers(newArr);
            }catch(err){
                console.error(err);
            }
        }
        getUsers();

        return ()=>{
            isMounted = false;
            controller.abort();
        }
    },[])


    return<>
        <h2>Users List</h2>
        {users?.length?
            (<ul>
                {users.map((user:string,i)=><li style={{color:"white"}} key={i}>{
                    user
                }</li>)}
            </ul>)
        :
        <p>No user to display</p>}
    </>
}

export default Users;