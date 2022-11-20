function logar(){
    var login = document.getElementById('log').value;
    var senha = document.getElementById('pass').value;

    if(login =="SrEdition" && senha =="231427") {
    location.href= "menu.html"
    }
    else {
        alert("Senha ou NickName incorreto");
    }
}
