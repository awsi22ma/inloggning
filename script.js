const name = document.getElementById("username");
const psw = document.getElementById("password");
const login = document.getElementById("login");
const logut = document.getElementById("logut");

let userChecker = localStorage.getItem("username");
let passChecker = localStorage.getItem("password");


if (userChecker == 'Sara' && passChecker == 'qwe123' );  { 




  document.getElementById("demo").style.display="none";
  document.getElementById("logut").style.display = "block";
  
  }
login.addEventListener("click", function () {

  if (username.value == "Sara" && password.value == "qwe123") {

      localStorage.setItem("usernamn", "Sara");
      localStorage.setItem("password", "qwe123");
      document.getElementById("demo").style.display = "none";
      
  alert("vällkomen du har inloggat")
      document.getElementById("logut").style.display = "block";
      
  }
  else {

      alert("Fel password försök igen.");
  }
  
});


  logut.addEventListener("click", function () {



    localStorage.removeItem("usernamn", "Sara");
    localStorage.removeItem("password", "qwe123");
    document.getElementById("demo").style.display = "block";

    document.getElementById("logut").style.display = "none";
} 


);

