
import { Button, Grid, Input } from '@mui/material'
import ava from '../Images/ava.png'
import send from '../Images/senden.png'
import { Box } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getChats ,getMessagesByChat,postMessage} from '../features/user/user-slice'
import dots from "../Images/menu.png"
import {useState} from 'react'

import { useGetMessagesQuery,useGetChatsQuery,apiSlice} from '../features/user/apiSlice'
import { Modal ,Modal_obj} from './ReactModalComponent'

const Interval_time = 1000;

const Chat=()=>{

    const userId:string = useSelector((state:any)=>state.user.user.Id);
    const state = useSelector((state:any)=>state.user);
    // const chats_ = useSelector((state:any)=>state.user.chats);
    // var messages_ = useSelector((state:any)=>state.user.messages);
    const dispatch = useDispatch();
    const [currentChat,setCurrentChat] = useState(Number);

    const [inputText, setInputText] = useState('');

    const message={chatId:currentChat}
    const chat_request={userId:userId}
    
    var messages_:any = [{}];
    {
        const {data} = useGetMessagesQuery(message);
        if(data != undefined)
        {
            messages_ = data.messages;
            // console.log("chat");
            // console.log(data);
        }
    }

    var chats_fromServ:any = [{}];
    {
        const {data} = useGetChatsQuery(chat_request);
        if(data != undefined)
        {
            chats_fromServ = data.chats;
            // console.log("chat");
            // console.log(chats_fromServ);
        }
    }

    const [setMessages,{}] = apiSlice.useSetMessagesMutation();
    

    const [isModalOpen,setModalState]= useState(false);

    const toggleModal = ()=>setModalState(!isModalOpen);

    // const {
    //     data,
    //     isLoading,
    //     error
    // } = useGetMessagesMutatin(message);

    // console.log(data);



    useEffect(()=>{

    },[dispatch])

    const handleAddMessage=async(message_ToServer:any)=>{
        await setMessages(message_ToServer);
    }

    const handleSubmit:any=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        const data_ = new FormData(event.currentTarget);
        
        let message_text = data_.get('message-text')?.toString();
        let message_text_2 = data_.get('message-text');

        const message_ToServer = {
            userId:userId,
            chatId:currentChat,
            text:message_text
        };

        setInputText("");

        handleAddMessage(message_ToServer);
        // dispatch(postMessage(message_ToServer));
        // messages_ = data;
        // navigate("/user/posts");
    }

    function Message(messageText:string,someoneUserId:any,created:any)
    {
        
        let isYourMessage:boolean = false;

        if(userId == someoneUserId)
        {
            isYourMessage = true;
        }
        var messageClassNameType = "";
        var messageTimeClassNameType = "";
        
        {isYourMessage ? messageClassNameType = "myMessage" : messageClassNameType = "oponentMessage"}
        {isYourMessage ? messageTimeClassNameType = "messageMyTime" : messageTimeClassNameType = "messageOponentTime"}

        return<>
        {/* <Grid style={{flexDirection:"row-reverse"}}></Grid> */}

        {/* alignSelf:"flex-end" && flexDirection:"row-reverse" */}
        
        <Box className={messageClassNameType} style={{margin:"10px"}}>
            <Box >
                <img style={{height:"60px"}} src={ava}/>
            </Box>
            <Box style={{background:"#827abf",maxWidth:"300px",overflowWrap: "break-word",color:"white"}} marginLeft={2} marginRight={2} padding={2} borderRadius={2}>
                {/* <img style={{maxHeight:"270px",marginBottom:"20px"}} src={ava}/>
                <br></br> */}
                {messageText}
                <div className={messageTimeClassNameType}>
                    {parseDate(created)}
                </div>

            </Box>
        </Box>
        </>
    }

    function parseDate(date:any) {
        // 2022-11-29T17:11:01.8448808
        var tmp = date.split('T');
        var newDate = tmp[1].substr(0, 5);
        return newDate;
    }

    const clickOnChat=(chatId_:any)=>
    {
        const message={chatId:chatId_} 
        setCurrentChat(chatId_);
        dispatch(getMessagesByChat(message));
    }

    function ChatUnit(name:string,chatId:any)
    {
        // id="chatId"
        return(
        <div key={chatId} onClick={()=>clickOnChat(chatId)}>
            <Grid className='chats' id={name} item container borderRadius={3} direction="row" alignContent="center" padding={2} marginTop={1}>
                <Grid item xs={3}>
                    <img src={ava} style={{height:"60px"}}></img>
                </Grid>
                <Grid item xs={8} marginTop="20px" marginLeft={2}>
                    #{name}
                </Grid>
            </Grid>
        </div>
        )
    }

    function MessageBuilder() {
        let val = true;

        for (let index = 0; index < messages_.length; index++) {
            const element = messages_[index];
            if(element.userId == undefined)
            {
                val = false;
            }
        }
        if(val)
        {
            var mess = messages_.map((message:any)=>Message(message.message.text,message.userId,message.message.created));
            return mess;
        }
    }

    function ChatBuilder() {
        let val = true;

        // console.log(chats_fromServ);
        if(chats_fromServ != undefined)
        {
            for (let index = 0; index < chats_fromServ.length; index++) {
                const element = chats_fromServ[index];
                if(element.name == undefined)
                {
                    val = false;
                }
            }

            if(val)
            {
                var mess = chats_fromServ.map((chat:any)=>ChatUnit(chat.name,chat.id));
                return mess;
            }
        }
    }


    return (
    <Grid item container direction="column" padding={2} className="chat" justifyContent="end">
        
        <Grid xs={1} item container direction="row" padding={1}>
            <div onClick={toggleModal}>
                <img src={dots} style={{height:"25px"}} className="dots_menu"></img>
            </div>
            <Modal_obj title={"Yo"} isOpen={isModalOpen} onClose={toggleModal} slideStart={0}>
                Yo
            </Modal_obj>

        </Grid>


        <Grid xs={10.5} item container direction="row" padding={0.2}>
            <Grid xs={3} item container style={{background:"#121215"}} borderRadius={3} direction="column" padding={1}>
                <Box className="chatSection example" style={{height:"550px"}}>
                    {ChatBuilder()}
                </Box>
            </Grid>
            <Grid xs={8.8} item container sx={{ ml:2 }} style={{background:"#121215"}} borderRadius={3} direction="column" padding={1} justifyContent="end">
                <Box className="chatSection example" style={{height:"485px"}}>
                    {MessageBuilder()}
                    {/* {Message("I fall in love with you babe",true)}
                    {Message("Damn how are u??",false)}
                    {Message("Your nightmare xdddddddxdxdxd",true)}
                    {Message("Psyho",false)}
                    {Message("So.... Do you want to spend this night with me??",true)}
                    {Message("Fuck off, it is 1 Jahnuar, today i can see jojo 3 teil of 6 part, im byssi",false)} */}

                </Box>

                
                <Grid component="form" onSubmit={handleSubmit} xs={1.5} item container style={{background:"#605b83"}} borderRadius={3} alignContent="center" direction="row" padding={1}>
                    <Grid xs={0.8} item container className='sendMessage' style={{background:"#605bb2"}} justifyContent="center" padding={1} borderRadius={3}>
                        <Button type="submit">
                            <img src={send} style={{height:"24px",marginRight:"3px",marginTop:"3px"}}></img>
                        </Button>
                    </Grid>

                    <Grid xs={11} item padding={1}>
                        <Input value={inputText} onChange={event => setInputText(event.target.value)} name='message-text' style={{width:"90%",fontFamily: "CreatoDisplay",marginLeft:"10px"}}></Input>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Chat
