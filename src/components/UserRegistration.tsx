import { Button, Grid, Input } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserRegistration=()=>{

    const [Policy,setPolicy] = useState(false);

    const handleCheckBox=()=>{
        setPolicy(!Policy);
    }

    const userInputUnit=(inputName:string)=>{
        return(
            <Grid container xs={3} item direction="column" justifyContent="flex-end">
                <Grid xs={1} item marginLeft={1} marginRight={1} style={{color:"white"}}>
                    {inputName}
                </Grid>
                <Grid xs={6} item style={{background:"#8681ae"}} marginLeft={1} marginRight={1} borderRadius={2} paddingRight={1} paddingLeft={1}>
                    <Input id={inputName} name={inputName} style={{width:"100%",height:"100%",fontFamily:"CreatoDisplay"}}></Input>
                </Grid>
            </Grid>
        )
    }

    return<>
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
                        {userInputUnit("Password")}
                        {userInputUnit("ConfirmPassword")}
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
    </>
}



export default UserRegistration;