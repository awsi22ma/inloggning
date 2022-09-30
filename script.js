var modal = document.getElementById('id01');




window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function myFunction() {
  
   
  let uname = document.getElementsByName("uname")[0].value;
  let psw = document.getElementsByName("psw")[0].value;
  try { 
    if(uname == "sara" && psw =="qwe123")
    {  alert( "välkommen, du är nu inloggad");}
    
    else{
      alert("försök igen");
    }
    
    
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}
localStorage .setItem("uname","sara");
innerHTML = localStorage.getItem("uname");
localStorage .setItem("psw","qwe123");
innerHTML = localStorage.getItem("uname");

