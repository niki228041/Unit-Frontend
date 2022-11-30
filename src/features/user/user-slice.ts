//DUCKS pattern
import { createSlice,PayloadAction,nanoid,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import parseJwt from "../../api/jwtDecodeToken";

import { SetAccessToken,SetRefreshToken } from "../../api/jwtDecodeToken";


const baseURL ='https://localhost:5001';

// interface UserState{
//     user:any;
//     loading:boolean;
//     error:string|null;
//     isAuth:boolean;
//     message:string|null;
//     allUsers:any;
// }

// :UserState 
const initialState= {
    user:{},
    chats:[{}],
    messages:[{}],
    accessToken:"",
    refreshToken:"",
    loading:false,
    error:"",
    isAuth:false,
    message:"",
    allUsers:[]
};

export const getUsers:any = createAsyncThunk('/User/GetAllUsers',async()=>{
    try{
        const response = await axios.get(baseURL + '/User/GetAllUsers');
        (response.data);
        return response.data;
    }catch(err:any){
        return err.message;
    }
})

export const getChats:any = createAsyncThunk('/User/GetAllChatsByUser',async(userId:any)=>{
    try{
        ("aboba");
        const response = await axios.post(baseURL + '/User/GetAllChatsByUser',userId);
        return response.data;
    }catch(err:any){
        return err.message;
    }
})

export const getMessagesByChat:any = createAsyncThunk('/User/GetAllMessagesByChat',async(chatId:any)=>{
    try{
        ("chat aboba");
        const response = await axios.post(baseURL + '/User/GetAllMessagesByChat',chatId);
        return response.data;
    }catch(err:any){
        return err.message;
    }
})

export const postLogin:any = createAsyncThunk('/User/Login',async(dateFromFrontend:any)=>{
    try{
        const response = await axios.post(baseURL + '/User/Login',dateFromFrontend);
        return response.data;
    }catch(err:any){
        return err.message;
    }
})

export const postRegistration:any = createAsyncThunk('/User/Register',async(dateFromFrontend:any)=>{
    try{
        const response = await axios.post(baseURL + '/User/Register',dateFromFrontend);
        return response.data;
    }catch(err:any){
        return err.message;
    }
})

export const postMessage:any = createAsyncThunk('/User/AddMessage',async(dateFromFrontend:any)=>{
    try{
        const response = await axios.post(baseURL + '/User/AddMessage',dateFromFrontend);
        return response.data;
    }catch(err:any){
        return err.message;
    }
})


export const AuthUser:any = createAsyncThunk('',(token:string)=>{
    var decodedToken = "";
    if(token != "")
    {
        decodedToken = parseJwt(token) as any;
    }
    try{
        return decodedToken;
    }catch(err:any){
        return err.message;
    }
});



const userSlice = createSlice(
{
    name:'user',
    initialState,
    reducers:
    {
        // incremented(state)
        // {
        //     //можна міняти стейт без копіювання  (state...)=не потрібно
        //     state.value++;
        // },
        // amountAdded(state,action: PayloadAction<number>){
        //     state.value += action.payload;
        // }

        login(state,action: PayloadAction<any>){
            state.user = action.payload
        },
        registration(state,action: PayloadAction<any>){
            state.user = action.payload.decodedToken;
        }
    },
    extraReducers(builder){
        builder
            .addCase(postLogin.pending,(state,action)=>{
                state.loading = true
            })
            .addCase(postLogin.fulfilled,(state,action)=>{
                state.loading = false;
                let min = 1;
                // const loadedUsers = action.payload.map(unit=>{
                //     return unit;
                // })



                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;

                SetAccessToken(action.payload.accessToken);
                SetRefreshToken(action.payload.refreshToken);

                state.user = parseJwt(action.payload.accessToken);


                state.isAuth = true;

                (action.payload.message);
                (state.user);
                (state.accessToken);
                (state.refreshToken);

            })
            .addCase(getUsers.pending,(state,action)=>{
                state.loading = true
            })
            .addCase(getUsers.fulfilled,(state,action)=>{
                state.loading = false;
                // const loadedUsers = action.payload.map(unit=>{
                //     return unit;
                // })
                let users = action.payload.message.split('|');
                if(users.length != 0)
                {
                    users.pop(users.length-1);
                }
                ("users:");
                
                (action.payload.message);
                state.allUsers = users;
            })
            .addCase(postRegistration.pending,(state,action)=>{
                state.loading = true;
            })
            .addCase(postRegistration.fulfilled,(state,action)=>{
                state.loading = false;
                

                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;

                state.user = parseJwt(action.payload.accessToken);


                SetAccessToken(action.payload.accessToken);
                SetRefreshToken(action.payload.refreshToken);

                state.isAuth = true;

                (action.payload.message);
                (state.user);
                (state.accessToken);
                (state.refreshToken);
            })
            .addCase(AuthUser.fulfilled,(state,action)=>{
                if(action.payload == "")
                {
                    state.isAuth = false;
                }
                else
                {
                    state.isAuth = true;
                }
                (action);
                state.user = action.payload;
            })
            .addCase(getChats.pending,(state,action)=>{
                state.loading = true;
            })
            .addCase(getChats.fulfilled,(state,action)=>{
                state.loading = false;
                if(action.payload.chats != null && action.payload.chats.length != 0)
                {
                    state.chats = action.payload.chats;
                    (state.chats);
                }
                else
                {
                    state.chats = [{}];
                }
            })
            .addCase(getMessagesByChat.pending,(state,action)=>{
                state.loading = true;
            })
            .addCase(getMessagesByChat.fulfilled,(state,action)=>{
                state.loading = false;
                (action.payload.messages);

                if(action.payload.messages != null && action.payload.messages.length != 0)
                {
                    state.messages = action.payload.messages;
                }
                else
                {
                    state.messages = [{}];
                    (state.messages);
                }
            })
            .addCase(postMessage.pending,(state,action)=>{
                state.loading = true;
            })
            .addCase(postMessage.fulfilled,(state,action)=>{
                state.loading = false;
                (action.payload);
            })
    }
});





export const {login,registration} = userSlice.actions;
export default userSlice.reducer;