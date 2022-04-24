function oku(){
    document.getElementById('products').innerHTML = html;
}

function dnm(){
    fetch('https://dummyjson.com/users')
    .then(resp => resp.json())
    .then(data=> {
        console.log(data)
        let html='<ul>'
        
        data.users.map(user=> {
            html += '<li onclick="getUser('+ user.id +')">' + user.firstName + '' +user.lastName + '</li>'
        });
        html += '</ul>'
        document.getElementById('products').innerHTML = html;
    });
}

dnm();
function getUser(id) {
    console.log(id);
  
    fetch('https://dummyjson.com/users/' + id)
    .then(resp => resp.json())
    .then(user=> {
  
      let html = '<div>'
  
      html += '<strong>' + user.firstName + '</strong>'
      html += '<strong>' + user.lastName + '</strong>'
      html += '<span><b>Yaş: </b>' + user.age + '</span>'
      html += '<span><b>Email: </b>' + user.email + '</span>'
      html += '<span><b>Cinsiyet: </b>' + user.gender + '</span>'
      html += '<span><b>Telefon: </b>' + user.phone + '</span>'
      html += '</div>'
      html += "<button onclick=dnm() > Tüm kullanıcılara geri dön</button>"
        document.getElementById('products').innerHTML =html;
    });

}

function getBack(){
    window.history.back();
}
