var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var inimigoOpt = "";

function inimigoJogar(){
    let rand = Math.floor(Math.random()*3);

    const enemyOptions = document.querySelectorAll('.enemy-options div');
    resetOpacityInimigo();
    for(var i = 0; i < enemyOptions.length; i++){
        if(i == rand){
            
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
    }
}



function resetOpacityInimigo(){
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    for(var i = 0; i < enemyOptions.length; i++){
            enemyOptions[i].childNodes[0].style.opacity = 0.3;
    }
}


function resetOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
       elementos[i].style.opacity = 0.3;
    }
}

function validarVitoria(){

    let resultado = document.querySelector('.resultado');

    if(playerOpt == "scissor"){
        if(inimigoOpt == "rock"){
            resultado.innerHTML = "Vitória da IA!";
        }
        else if(inimigoOpt == "scissor"){
            resultado.innerHTML = "Empate!"
        }
        else if(inimigoOpt == "paper"){
            resultado.innerHTML = "Vitória do Jogador!"
        }
    }
    if(playerOpt == "rock"){
        if(inimigoOpt == "rock"){
            resultado.innerHTML = "Empate!";
        }
        else if(inimigoOpt == "scissor"){
            resultado.innerHTML = "Vitória do Jogador!"
        }
        else if(inimigoOpt == "paper"){
            resultado.innerHTML = "Vitória da IA!"
        }
    }
    if(playerOpt == "paper"){
        if(inimigoOpt == "rock"){
            resultado.innerHTML = "Vitória do Jogador!";
        }
        else if(inimigoOpt == "scissor"){
            resultado.innerHTML = "Vitória da IA!"
        }
        else if(inimigoOpt == "paper"){
            resultado.innerHTML = "Empate!"
        }
    }
}



for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click',function(t)
    {
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        inimigoJogar();
        validarVitoria();
        
        
    });

    
}

