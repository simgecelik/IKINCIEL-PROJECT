import axios from "axios"
export const getAllProduct = async() =>{
    try {
        const res = await axios.get("http://bootcamp.akbolat.net/products")
        console.log("Res:",res);
        if(res.statusText==='OK') {return res.data;} 
        else {
            return {
                error:"Data gelmedi"
            }
        }
        
    } catch (error) {
        console.log(error)
        
    }
}

export const getProduct = async id =>{
    try {
        const res = await axios.get(`http://bootcamp.akbolat.net/products/${id}`)
        console.log("Res:",res);
        if(res.statusText==='OK') {return res.data;} 
        else {
            return {
                error:"Data gelmedi"
            }
        }
        
    } catch (error) {
        console.log(error)
        
    }
}

export const getProductById = async id =>{
    try {
        const res = await axios.get(`http://bootcamp.akbolat.net/products&category=${id}`)
        console.log("product idye göre:",res);
        if(res.statusText==='OK') {return res.data;} 
        else {
            return {
                error:"Data gelmedi"
            }
        }
        
    } catch (error) {
        console.log(error)
        
    }
}