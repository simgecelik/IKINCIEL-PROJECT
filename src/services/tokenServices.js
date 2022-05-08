import axios from "axios"
import { useState } from "react";
export const createToken = (input) =>{
   axios.post(`https://bootcamp.akbolat.net/auth/local/register`,{
      email:input.email,
      password:input.password,
      username:input.email
    })
    .then((response)=> {
        const token = response.data.jwt;
        console.log(token);
       //console.log("token:",response.data.jwt)
    })
    //return res;
}

/*try {
    await axios.post(`http://bootcamp.akbolat.net/auth/local/register`,{
      email:input.email,
      password:input.password
    })
    .then((response)=> {
        const token = response.data.jwt;
        console.log("response:",response);
        console.log(token)
        return token;
        //console.log("token:",response.data.jwt)
    })
    
} catch (error) {
    console.log(error)
    
}*/
