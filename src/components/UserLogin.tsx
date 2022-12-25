import { Button, Grid, Input } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import {useSelector,useDispatch} from "react-redux"
import { login,registration,postLogin,getUsers} from "../features/user/user-slice";
import { useEffect, useState  } from "react";
import { Box } from "@mui/system";
import { useFormik } from 'formik';
import {Formik,Field,ErrorMessage} from "formik"
import TextField from '@mui/material/TextField';
import {LoginSchema} from "../validation/validation"


const InitialValue = {email: "",password:"",rememberMe:false};


const UserLogin=()=>{

    const [rememberMe_,setrememberMe_] = useState(false);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const isAuth = useSelector((state:any)=>state.user.isAuth);

    const handleCheckBox=()=>{
        setrememberMe_(!rememberMe_);
    }
    

    const handleSubmit:any=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        
        let Email_ = data.get('Email')?.toString();
        let Password_ = data.get('Password')?.toString();
        

        const user = {email:Email_,password:Password_,rememberMe:rememberMe_};
        dispatch(postLogin(user));
        navigate("/user/posts");
    }

    const userInputUnit=(inputName:string,isPassword:boolean=false)=>{
        var typeOfInput = "";
        {isPassword?typeOfInput="password":typeOfInput="text"}
        return(
            <Grid container xs={3} item direction="column" justifyContent="flex-end">
                <Grid xs={1} item  marginLeft={1} marginRight={1} style={{color:"white"}}>
                    {inputName}
                </Grid>
                <Grid xs={6} item style={{background:"#8681ae"}} marginLeft={1} marginRight={1} borderRadius={2} paddingRight={1} paddingLeft={1}>
                    <Input name={inputName} id={inputName} style={{width:"100%",height:"100%",fontFamily:"CreatoDisplay"}} type={typeOfInput}></Input>
                </Grid>
            </Grid>
        )
    }

    return<>
        <Box component="form" onSubmit={handleSubmit}>
        <Grid container justifyContent="center" alignContent="center" >

            <Grid item container style={{height:"750px",width:"600px",background:"#5d5985"}} marginTop={12} borderRadius={2} direction="column">
                <Grid item container xs={2} style={{fontSize:"60px",color:"white"}} padding={2} justifyContent="center" alignContent="center">
                    Sign in
                </Grid>
    
                <Grid item container xs={7} direction="row" padding={2} justifyContent="center">
                    <Grid item container xs={8} direction="column">


                        

                        

                        {userInputUnit("Email")}
                        {userInputUnit("Password",true)}
                            <Grid item xs={0.1}  marginTop={2}>
                                Don't have an account yet?{" "} {" "}  
                                <Link to="/registration">
                                    Click hier
                                </Link>
                            </Grid>
    
                        <Grid container xs={2} item direction="column" justifyContent="flex-end">
                            <Grid item xs={1} marginLeft={1} marginRight={1} style={{color:"white"}}>
                            </Grid>
                            <Grid xs={9.1} item container marginLeft={1} marginRight={1} paddingRight={1} direction="row" alignContent="center">
                                {rememberMe_ ?
                                    <Grid item xs={1.65} borderRadius={2} className="checkbutton_active">
                                        <div style={{height:"100%"}} onClick={handleCheckBox}>
                                        </div>
                                    </Grid> : 
                                    <Grid item xs={1.65} borderRadius={2} className="checkbutton">
                                        <div style={{height:"100%"}} onClick={handleCheckBox}>
                                        </div>
                                    </Grid>
                                 }
                                
                                <Grid item container xs={8} marginLeft={1} marginRight={1} style={{color:"white"}} alignContent="center">
                                    <Grid item>
                                        Remember Me
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                             
                             
                    </Grid>
                </Grid>
                             
                <Grid item container xs={2} padding={3} justifyContent="center" alignContent="center" marginTop={-12}>
                    <Button className="readyFormButton" style={{width:"70%"}} type="submit">
                        Ready
                    </Button>
                </Grid>
            </Grid>
                
        </Grid>
        </Box>
    </>
}



export default UserLogin;