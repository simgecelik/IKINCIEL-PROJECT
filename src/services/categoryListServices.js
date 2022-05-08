import axios from "axios"
export const getCategories = async() =>{
    try {
        const res = await axios.get("http://bootcamp.akbolat.net/categories")
        console.log("kateegory:",res)
        if(res.statusText==='OK') {return res.data;} 
        else {
            return {
                error:"Data gelmedi"
            }
        }
        
    } catch (error) {
        console.log(error);
    }
}