import { Button, Grid, Input } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postRegistration } from "../features/user/user-slice";
import { useDispatch } from "react-redux";

const UserRegistration=()=>{

    const [Policy,setPolicy] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCheckBox=()=>{
        setPolicy(!Policy);
    }

    const handleSubmit:any=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        
        // "username": "string",
        // "name": "string",
        // "surname": "string",
        // "email": "string",
        // "password": "string",
        // "confirmPassword": "string",
        // "birthday": "2022-11-27T17:18:00.890Z"

        let Username_ = data.get('Username')?.toString();
        let Name_ = data.get('Name')?.toString();
        let Surname_ = data.get('Surname')?.toString();
        let Birthday_ = data.get('Birthday')?.toString();
        let Email_ = data.get('Email')?.toString();
        let Password_ = data.get('Password')?.toString();
        let ConfirmPassword_ = data.get('ConfirmPassword')?.toString();
        

        const user = {
            username:Username_,
            name:Name_,
            surname:Surname_,
            email:Email_,
            password:Password_,
            confirmPassword:ConfirmPassword_,
            birthday:"2022-11-27T17:18:00.890Z",
        };

        dispatch(postRegistration(user));
        navigate("/user/posts");
    }

    const userInputUnit=(inputName:string,isPassword:boolean=false)=>{
        var typeOfInput = "";
        {isPassword?typeOfInput="password":typeOfInput="text"}
        return(
            <Grid container xs={3} item direction="column" justifyContent="flex-end">
                <Grid xs={1} item marginLeft={1} marginRight={1} style={{color:"white"}}>
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
            <Grid item container style={{height:"750px",width:"800px",background:"#5d5985"}} marginTop={12} borderRadius={2} direction="column">
                <Grid item container xs={2} style={{fontSize:"60px",color:"white"}} padding={2} justifyContent="center" alignContent="center" >
                    Sign up
                </Grid>

                <Grid item container xs={7} direction="row" padding={2}>
                    <Grid item container xs={6} direction="column">

                        {/* UserInputItem */}
                        {userInputUnit("Username")}
                        {userInputUnit("Name")}
                        {userInputUnit("Surname")}
                        {userInputUnit("Birthday")}
                    </Grid>
                    <Grid item container xs={6} direction="column">
                    
                        {userInputUnit("Email")}
                        {userInputUnit("Password",true)}
                        {userInputUnit("ConfirmPassword",true)}
                        <Grid container xs={3} item direction="column" justifyContent="flex-end">
                            <Grid item xs={1} marginLeft={1} marginRight={1} style={{color:"white"}}>
                            </Grid>
                            <Grid xs={6} item container marginLeft={1} marginRight={1} paddingRight={1} direction="row" alignContent="center">
                                {Policy ?
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
                                        I agree with site Policy
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={0.2} paddingLeft={3}>
                    Already have an account?{" "} {" "}  
                    <Link to="/login">
                        Click hier
                    </Link>
                </Grid>

                <Grid item container xs={2} padding={3} >
                    <Button className="readyFormButton" style={{width:"100%"}} type="submit">
                        Ready
                    </Button>
                </Grid>
            </Grid>
        </Grid>
        </Box>
    </>
}



export default UserRegistration;