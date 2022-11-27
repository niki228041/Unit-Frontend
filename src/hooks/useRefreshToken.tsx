import axios from "../api/axios";

const useRefreshToken=()=>{

    const refresh = async ()=>{
        const response = await axios.get('/User/refreshToken',{
            withCredentials:true
        });
        // setAuth(prev=>{
        //     console.log(JSON.stringify(prev));
        //     console.log(response.data.accessToken);
        //     return {...prev,accessToken:response.data.accessToken}
        // });
        return response.data.accessToken;
    }
}