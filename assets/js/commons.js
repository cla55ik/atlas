function ansValidation(ev) {
  ev.preventDefault


  var passVal = document.getElementById("password").value
  var confpassVal = document.getElementById("password-confirm").value
  if (passVal === "" || confpassVal === ""){
    document.getElementsById("message").innerHTML = "Введите пароль и подтверждение";
  }
  }else if(passVal !== confpassVal) {
     document.getElementsById("message").innerHTML = "Пароли не совпадают";
  }
}
