var reponse = document.getElementById("reponse");
var boutonValider = document.getElementById("boutonValider");

boutonValider.onclick= function() {
     if (reponse.value === "Cafeteria"){
        reponse.value="Gehen Sie hin und suchen Sie nach dem Hinweis ";
    }
    else{reponse.value="Falsche Antwort";
}
    }
