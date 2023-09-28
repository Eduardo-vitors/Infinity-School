let cartas = document.querySelectorAll(".memory-card")  
let tentativas=document.querySelector("#tentativas")
let score=document.querySelector("#score")

cartas.forEach(carta=>carta.addEventListener("click",virarCarta))
let primeiraCarta, segundaCarta, auxiliar=false, tabuleiroTravado=false,Ntentativa=0,Nscore=0,acerto=0

function virarCarta(){
    if(Ntentativa>=5){
        alert("Numeros de tentativas excedido")
        return
    }
    if(tabuleiroTravado){
        return
    }

    this.classList.add("flip")
    if(!auxiliar){
        primeiraCarta=this
        auxiliar=true

        return
    }

    if(this===primeiraCarta){
        return
    }

    segundaCarta=this
    auxiliar=false
    
    comparar()
}

function comparar(){
    if(primeiraCarta.dataset.framework===segundaCarta.dataset.framework){
        acerto+=1
        primeiraCarta.removeEventListener("click",virarCarta)
        segundaCarta.removeEventListener("click",virarCarta)
        Ntentativa=0
        if(acerto===6){
            Nscore+=1
            score.innerHTML=Nscore
        }
    }else{
        tabuleiroTravado=true
        Ntentativa+=1
        setTimeout(()=>{
            primeiraCarta.classList.remove("flip")
            segundaCarta.classList.remove("flip")
            tentativas.innerHTML=Ntentativa
            tabuleiroTravado=false
        },1500)
    }
}

function embaralhar(){
    for(let carta of cartas){
        let aleatoria = Math.floor(Math.random()*12)
        carta.style.order=aleatoria
    }
}
function reiniciar(){
    //[auxiliar,tabuleiroTravado]=[false,false]
    auxiliar=false
    tabuleiroTravado=false
    Ntentativa=0
    acerto=0
    primeiraCarta = null
    segundaCarta = null
    cartas.forEach((carta)=>{
        carta.addEventListener("click",virarCarta)
        carta.classList.remove("flip")
       })
    tentativas.innerHTML=Ntentativa
    embaralhar()

}
embaralhar()