import { Button, Grid, Input} from '@mui/material'
import React, { useState,useEffect } from 'react'
import ava from '../Images/ava.png'
import add from '../Images/add-image.png'
import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@mui/system'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { apiSlice, useGetContactsQuery ,useGetUserQuery,useGetAvatarQuery} from '../features/user/apiSlice'
import { useParams } from 'react-router-dom'

const Profile=()=> {

  var contacts:any = [{}];
  var singleUser:any = [{}];
  var image = new Image();

  var avaBackgroundColor = "white";
  

  const myUserId:any = useSelector((state:any)=>state.user.user.Id);
  

  const params = useParams();

  const requestToGetContacstAndUser = {userId:params.userId};


  const {data} = useGetContactsQuery(requestToGetContacstAndUser);

  const {data:user} = useGetUserQuery(requestToGetContacstAndUser);


  const [addContact,{}] = apiSlice.useAddContactMutation();
  const [setAvatar,{}] = apiSlice.useSetAvatarMutation();

  contacts = data?.contacts;

  if(data == undefined)
  {
    contacts = [{}];
  }

  singleUser = user?.singleUser?.username;

  const [selectedUser, setSelectedUser]:any = useState({});


  
  //console.log(avaBackgroundColor);

  // var blob = new Blob(bytesOfImage, {type: "application/zip"});
  // const ava = URL.createObjectURL(blob);


  // console.log(my_file_3);

  
  const setUser=()=>{
    const requestToAddContact = {userId:myUserId,contactId:params.userId}
    addContact(requestToAddContact);
    avaBackgroundColor = '';
    console.log(user);
  }

  const changeAvatar=(event:React.ChangeEvent<HTMLInputElement>)=>{
    const fileInput = event.target.files;
    
    for (const file of fileInput!) {
      var fileBytes = toBase64(file);

      fileBytes.then((res:any)=>{
        // console.log(res);
        var bytesToRequest = res.split(',')[1];
        var setAvatarRequest = {image:{data:bytesToRequest},userId:myUserId};
        setAvatar(setAvatarRequest);
        console.log(setAvatarRequest);
        
        avaBackgroundColor = '';
        
      })
      // var final = ;
    }


    // console.log(fileInput);
  }

  const toBase64 = (file:File) => new Promise((resolve, reject) => {
    // console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);

  });




  //requestToGetAvatar
  const requestToUser = {userId:params.userId};
  const {data:bytesOfImage} = useGetAvatarQuery(requestToUser);
  
  console.log(avaBackgroundColor);
  
  if(avaBackgroundColor == "white" && bytesOfImage != null || avaBackgroundColor == '')
  {
    // console.log("i`m changing the value of my avatar background");
    image.src = 'data:image/gif;base64,' + bytesOfImage.message;
    // document.body.appendChild(image);

    avaBackgroundColor = 'url('+image.src+')';
  }

  useEffect(()=>{
  },[]);

  return (
    <Grid container className='Posts' style={{background:"#49456a",width:"600px",height:"200px"}} padding={1} direction="column">
      <Grid xs={6.5} item container borderRadius={2} direction="column" justifyContent="end" className='profilePic'>
        
        <Grid xs={4} className="absolute " style={{width:"200px"}} item container borderRadius={2} marginBottom={3} marginLeft={2}>
          <div style={{height:"200px",width:"200px",backgroundImage:avaBackgroundColor,borderRadius:"100%",backgroundSize:"cover",backgroundPosition:"center center"}} ></div>
          {/* className="ava_" */}
          <div className="absolute" style={{height:"37px",width:"37px",borderRadius:"15px",display:"flex",marginLeft:"150px",marginTop:"10px"}}>
            <label htmlFor='add_img' style={{cursor:"pointer"}}>
              <img className="addButton" style={{height:"35px",margin:"auto",paddingLeft:"8px"} } src={add}></img>
              </label>
            <input multiple className="form-control" type='file' name="add_img" id="add_img" style={{display: "none"}} onChange={changeAvatar} />
          </div>
        </Grid>

        

        <Grid xs={3.5} item container className='mainColor'  borderRadius={2} direction="row" >
          <Grid xs={2.3} item style={{background:"#827xxx"}} borderRadius={2} >
          </Grid>

          <Grid xs={8}  item container borderRadius={2} direction="column" >

            <Grid xs={5} item container borderRadius={2}>
              <Grid xs={1}  item container borderRadius={2} style={{fontSize:"29px",color:"white"}} >
                #{user?.singleUser?.username}
              </Grid>
            </Grid>

            <Grid xs={6} item container borderRadius={2} style={{background:"#49456a",width:"65%",color:"white"}} direction="column">
              <Grid item paddingLeft={2} marginTop={1} style={{fontSize:"12px"}}>
                Bio:
              </Grid>
              <Grid item paddingLeft={2} style={{fontSize:"15px"}}>
                I like furry. And you can`t change my mind.
              </Grid>
            </Grid>
            
          </Grid>

          <Grid xs={1.5} item container alignContent="center" justifyContent="center">
          {myUserId != params.userId ?
            <Box onClick={()=>{setUser()}}>
              <Grid item container style={{height:"40px",width:"140px",margin:"auto"}} className="chats_" justifyContent='center' alignContent="center">
                <Grid item>
                  Subscribe
                </Grid>
              </Grid>
            </Box>
            :""
          }

          </Grid>
        </Grid>

      </Grid>

      <Grid xs={5.5} item container paddingTop={1} direction="row">
        <Grid xs={2.5} item container className='mainColor' padding={1} borderRadius={2}>
            <List className='contacts_box example'>
              {data?.contacts?.map((contact:any) => (
                  <ListItem
                    // onClick={() => handleListItemClick(contact)}
                    key={contact.id} style={{borderRadius:"10px",padding:"10px"}}>

                    <Box onClick={()=>setSelectedUser(contact)} >
                      
                      <Grid container style={{width:"210px"}}>
                          <Grid container item xs={12} direction="row" className="profile_contacts" >
                              <Grid xs={2} container item padding={1} direction="column">
                                  <Grid item>
                                      <p style={{fontFamily:"CreatoDisplay"}}>{contact.username}</p>
                                  </Grid>
                                  <Grid item marginTop="-20px">
                                      <p style={{fontFamily:"CreatoDisplay",color:"#9d96ca",fontSize:"10px"}}>{contact.email}</p>
                                  </Grid>
                              </Grid>
                          </Grid>
                      </Grid>

                    </Box>
                  </ListItem>
                ))}
              </List>
        </Grid>
      </Grid>
      {/* <Grid xs={6} item container style={{background:"#827abf"}} borderRadius={2}>
        das
      </Grid> */}
    </Grid>
  )
}

export default Profile