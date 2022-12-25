import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const apiSlice:any = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:"https://localhost:5001"}),
    tagTypes:['Messages','Chats','Contacts','Avatar'],
    endpoints:(builder)=>({
        getMessages:builder.query<any,any>({
            query:(todo)=>({
              url:'/User/GetAllMessagesByChat',
              method:"POST",
              body:todo
            }),
            providesTags:result=>['Messages']
        }),
        setMessages:builder.mutation<any,any>({
          query:(todo)=>({
            url:'/User/AddMessage',
            method:"POST",
            body:todo
          }),
          invalidatesTags:['Messages']
        }),
        getChats:builder.query<any,any>({
          query:(todo)=>({
            url:'/User/GetAllChatsByUser',
            method:"POST",
            body:todo
          }),
          providesTags:result=>['Chats']
        }),
        addChat:builder.mutation<any,any>({
          query:(todo)=>({
            url:'/User/AddChat',
            method:"POST",
            contentType: 'application/json',
            body:todo
          }),
          invalidatesTags:['Chats']
        }),
        getContacts:builder.query<any,any>({
          query:(todo)=>({
            url:'/User/GetContactsByUser',
            method:"POST",
            body:todo
          }),
          providesTags:result=>['Contacts']
        }),
        addContact:builder.mutation<any,any>({
          query:(todo)=>({
            url:'/User/AddContactToUser',
            method:"POST",
            contentType: 'application/json',
            body:todo
          }),
          invalidatesTags:['Contacts']
        }),
        getUsers:builder.query<any,undefined>({
          query:(todo)=>({
            url:'/User/GetAllUsers',
            method:"GET",
            body:todo
          }),
        }),
        getUser:builder.query<any,any>({
          query:(todo)=>({
            url:'/User/GetUserById',
            method:"POST",
            body:todo
          }),
        }),
        getAvatar:builder.query<any,any>({
          query:(todo)=>({
            url:'/User/GetAvatar',
            method:"POST",
            contentType: 'application/json',
            body:todo
          }),
          providesTags:result=>['Avatar']
        }),
        setAvatar:builder.mutation<any,any>({
          query:(todo)=>({
            url:'/User/UploadAvatar',
            method:"POST",
            contentType: 'application/json',
            body:todo
          }),
          invalidatesTags:['Avatar']
        }),
    })
})


export const{useGetMessagesQuery,useGetChatsQuery,useGetContactsQuery,useGetUsersQuery,useGetUserQuery,useGetAvatarQuery} = apiSlice

