let divs = document.querySelectorAll("div")

divs.forEach((div, index) => div.addEventListener("click", () => joga(index)))

/* alternar entre jogadores toda vez que a função for chamada */
let jogadorAtual = "x"

let jogadas = [
    '', '', '', 
    '', '', '',
    '', '', ''
            ]

let possiveisVencimentos = [
    [0, 1, 2]
]

function joga(index) {
    this.innerHTML = jogadorAtual

    jogadas[index] = jogadorAtual
    jogadorAtual = jogadorAtual == 'x' ? 'o' : 'x'
}
