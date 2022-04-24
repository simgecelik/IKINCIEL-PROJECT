function oku (){
    fetch('https://dummyjson.com/products/1')
    .then(resp=> resp.json())
    .then(data=>{
       let products = localStorage.getItem('products');
       if(products){
         products =JSON.parse(products)
         products.push(data);
         localStorage.setItem('products',JSON.stringify(products))
       }
       else{
        localStorage.setItem('products',JSON.stringify([data]))
       }
        
    }
        )
}

oku();