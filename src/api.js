import axios from "axios";



/*export const fetchRegister = async(input) => {
    //const {data} = await axios.post('http://localhost:3000/api/auth/local/register',input);

    const {data} = await axios.post('https://bootcamp.akbolat.net/auth/local/register',input);
   
    console.log("data:",data)
     return data;

}*/
export const fetchRegister = async(input) => {

const {data}= await axios
  .post('http://bootcamp.akbolat.net/auth/local/register', {
    email: `${input.email}`,
    password: `${input.password}`,
  })
  .then(response => {
    //Store user token in cookie or localstorage, then use it in all next requests.
    console.log('Your user token', response.data.jwt);
  })
  .catch(error => {
    // Something wrong with auth. Wrong credentials maybe.
    console.log('An error occurred:', error.response);
  });
  return data;

}