
function datosFormulario(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var data = {
        username:username,
        password:password
    };

    fetch("/login",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data =>{console.log(data);})
    .catch(error=>console.error("error",error))
}