let computer = document.querySelector(".computer")
let user =document.querySelector(".user")
let result =document.querySelector(".result")
let score =document.querySelector(".score")
let placar_comp=0
let placar_user=0

function sortear(){
    let somaUsuario=0
    let somaComputador=0
    user.innerHTML=""
    computer.innerHTML=""

    for(let i=0;i<3;i++)
    {
        let sorteado = Math.floor(Math.random()* 5 + 1)
        somaComputador+=sorteado
        computer.innerHTML+=`<img src="./assets/dice-${sorteado}.png"/>`

        let sorteado_user = Math.floor(Math.random()* 5 + 1)
        somaUsuario+=sorteado_user
        user.innerHTML+=`<img src="./assets/dice-${sorteado_user}.png"/>`
    }
    /* result.innerHTML=somaComputador>somaUsuario? "Computador Venceu":
    somaUsuario>somaComputador? "Usuario venceu": "Empate" */
    if(somaComputador>somaUsuario){
        placar_comp++
        result.innerHTML="Computador venceu"
        score.innerHTML=`placar: computador ${placar_comp} X Usuário ${placar_user}`
    }else if(somaUsuario>somaComputador){
        placar_user++
        result.innerHTML="Usuário venceu"
        score.innerHTML=`placar: computador ${placar_comp} X Usuário ${placar_user}`
    }else{
        placar_comp++
        placar_user++
        result.innerHTML="Empate"
        score.innerHTML=`placar: computador ${placar_comp} X Usuário ${placar_user}`
        
    }
}