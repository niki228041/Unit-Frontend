import { Button, Grid, Input, ListItemAvatar, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { apiSlice, useGetChatsQuery, useGetContactsQuery } from "../features/user/apiSlice";


import close from '../Images/close.png'
import ava from '../Images/ava.png'


import './StylesForUIComponents.css'


interface ModalProps_VM{
    title:string;
    isOpen:boolean;
    onClose:()=>void;
    children:any;
    slideStart:number;
}


interface ModalProps{
    title:string;
    isOpen:boolean;
    onClose:()=>void;
    children:any;
    slideNum:number;
    slideSet:()=>void;
    contactsForGrid:any;
    inputText:any;
    setInputText:(someText:any)=>void;
    setSelectedUser:(user:any)=>void;
}

export const setNameOfChat:any=(slideSet:any,inputText:any,setInputText:any)=>{
    return(
        <>
            <Grid item style={{fontSize:"40px",textAlign:"center"}}>
                Create a new Chat
            </Grid>
            <Grid item style={{fontSize:"14px",textAlign:"center"}}>
                To cancel click at cross
            </Grid>
            <Grid item container direction="row" padding={2} alignItems="center" alignContent="center">
                <Grid item container direction="column" alignContent="center">
                    <Grid item style={{fontSize:"14px"}}>
                        Chat Name
                    </Grid>
                    <Grid item style={{background:"#5c5172",width:"70%"}} borderRadius={2} paddingRight={1} paddingLeft={1}>
                        <Input value={inputText} onChange={event => setInputText(event.target.value)} style={{width:"100%",height:"100%",fontFamily:"CreatoDisplay",color:"white"}} ></Input>
                    </Grid>

                </Grid>

            </Grid>
            
            <Grid item container xs={1} padding={3} justifyContent="center" alignContent="center">
                <Button onClick={slideSet} className="readyFormButtonSmoll" style={{width:"70%"}} type="submit">
                    Ready
                </Button>
            </Grid>
        </>
    )
}

var num_ = 1;

export const choiseTheContacts:any=(slideSet:any,contactsForGrid:any,setSelectedUser:any)=>{
    // const[data_,setData] = useState();
    

    console.log(contactsForGrid);

    var chats_fromServ:any;

    const handleIter=(row:any)=>
    {
        // contactsForGrid
        // chats_fromServ = data;
        row.statId = num_+1;
        console.log(row.statId);
        return num_++;
    }

    return(
        <>
            <Grid item style={{fontSize:"40px",textAlign:"center"}}>
                Create a new Chat
            </Grid>
            <Grid item style={{fontSize:"14px",textAlign:"center"}}>
                Take a friend to create a chat
            </Grid>
            {/* <Grid item container direction="row" padding={2} style={{background:"black",height:"350px"}} alignItems="center" alignContent="center"> */}
                {/* <DataGrid pageSize={10} style={{height:"400px"}} getRowId={(row:any) => row.statId = handleIter(row)} columns={[{field:"email"},{field:"id"}]} rows={contactsForGrid}/> */}
            {/* </Grid> */}

            <Box id="MyBoxID">
              <List>
                {contactsForGrid.map((contact:any) => (
                  <ListItem
                    // onClick={() => handleListItemClick(contact)}
                    key={contact} style={{background:"#605b83",borderRadius:"10px"}}>
                    <Box onClick={()=>setSelectedUser(contact)} style={{width:"100%"}}>
                        <Grid container style={{height:"90px"}} direction="row" className="chats" padding={1}>
                            <Grid xs={3} container item padding={1}>
                                <Grid item>
                                    <img style={{height:"60px"}} src={ava}></img>
                                </Grid>
                            </Grid>
                            <Grid xs={2} container item padding={1} direction="column">
                                <Grid item >
                                    <p style={{fontFamily:"CreatoDisplay"}}>{contact.username}</p>
                                </Grid>
                                <Grid item marginTop="-15px">
                                    <p style={{fontFamily:"CreatoDisplay",color:"#9d96ca"}}>{contact.email}</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                    
                  </ListItem>
                ))}
              </List>
            </Box>
            
            
            <Grid item container padding={3} justifyContent="center" alignContent="center">
                <Button onClick={slideSet} className="readyFormButtonSmoll" style={{width:"70%"}} type="submit">
                    Ready
                </Button>
            </Grid>
        </>
    )
}


export const Modal:React.FC<ModalProps>=({title,isOpen,onClose,children,slideNum,slideSet,contactsForGrid,inputText,setInputText,setSelectedUser})=>isOpen?(
    <div className={"modal"}>
        <div className="modal_overlay"></div>
        <div className="modal_box">
            
            <Grid container style={{height:"100%"}} direction="column" padding={2} alignItems="center" alignContent="center">
                <Grid container justifyContent="flex-end" className="modal_close-btn" xs={1} item >
                    <Grid item>
                        <div onClick={onClose}>
                            <img className="dots_menu" src={close} style={{height:"25px"}} alt={"close modal"}></img>
                        </div>
                    </Grid>
                </Grid>
                
                <Grid container item direction="column" alignContent="center" justifyContent="center" >
                    {
                        slideNum == 0 ?
                        <>
                            {setNameOfChat(slideSet,inputText,setInputText)}
                        </>
                    :" "}

                    {
                        slideNum == 1 ?
                        <>
                            {choiseTheContacts(slideSet,contactsForGrid,setSelectedUser)}
                        </>
                    :" "}
                </Grid>
                {/* <Grid xs={2} item >
                    {children}
                </Grid> */}
            </Grid>
        </div>
    </div>
):null;


export const Modal_obj:React.FC<ModalProps_VM>=({title,isOpen,onClose,children,slideStart})=>{

    const[slideNum_state,setSlideNum] = useState(slideStart);

    const [inputText, setInputText] = useState('');
    const [selectedUser, setSelectedUser]:any = useState({});
    const [addChat,{}] = apiSlice.useAddChatMutation();


    const userId_:string = useSelector((state:any)=>state.user.user.Id);
    const chats_ = useSelector((state:any)=>state.user.chats);


    const requestToGetContacst = {userId:userId_}
    const {data} = useGetContactsQuery(requestToGetContacst);

    var data_:any = [{}];
    
    if(userId_ != undefined)
    {
        if(data != undefined)
        {
            data_= data;
            data_ = data_.contacts;
        }
    }
    


    var num = 0;
    const handleAddNum=async ()=>
    {
        setSlideNum(slideNum_state+1);
        num = slideNum_state+1;
        if(slideNum_state>0)
        {
           setSlideNum(0);
        }

        if(slideNum_state==1)
        {
            if(inputText != undefined && inputText != null && inputText != '' && Object.keys(selectedUser).length !== 0)
            {
                console.log(selectedUser);
                console.log(inputText);
                console.log(isOpen);
                setSelectedUser({});
                setInputText('');
                const newChat = { name:inputText, usersId:[userId_,selectedUser.id] };

                var jsn = JSON.stringify(newChat);

                console.log(newChat);
                addChat(newChat);
                onClose();
            }    
        }

    }

    const setUser=(user:any)=>{
        setSelectedUser(user);
        console.log(user);
        
    }

    const handleInput=(someText:any)=>{
        setInputText(someText);
    }

    return(
        <Modal title={"Yo"} isOpen={isOpen} onClose={onClose} slideNum={slideNum_state} slideSet={handleAddNum} contactsForGrid={data_} inputText={inputText} setInputText={handleInput}
        setSelectedUser={setUser}>asd</Modal>
    )
}
