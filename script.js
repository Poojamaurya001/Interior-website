$(document).ready(function(){
$('#menu1').click(function(){
    $('#dropdown1').fadeToggle("slow")
}),
$('#fade').click(function(){
    $("#fade-show").fadeToggle("slow")
}),
$('#fade1').click(function(){
    $("#fade-show1").fadeToggle("slow")
})

})

function validationForm(){
   
    let username=document.querySelector("#username").value;
    let password=document.querySelector("#password").value;
    if(username ==" "){
        document.querySelector("err").innerHTML="**must be required to fill  the all fields**"
        return false;
    }
    if(password ==""){
        document.querySelector("err").innerHTML="**must be required to fill  the all fields**"
        return false;
    }
    if(username !="pooja001"){
        document.querySelector("err").innerHTML="**please enter valid username**"
        return false;
    }
    if(password !="maurya@2001"){
        document.querySelector("err").innerHTML="**please enter valid password**"
        return false;
    }
        
        document.querySelector("err").innerHTML="Welcome"
  
}

let loginForm=document.querySelector('#login')
loginForm.style.display="none"
let cross=document.querySelector('#cross')  

window.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        loginForm.style.display="block";
    },2000)
})

cross.addEventListener("click",()=>{
    loginForm.style.display="none";
})