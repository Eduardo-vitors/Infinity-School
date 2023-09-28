

const formulario = document.getElementById('formulario')

function enviar(event) {
    event.preventDefault()
    
    const telefone = document.getElementById('telefone').value

    const telefoneRegex = new RegExp(/\([0-9]{2}\)[0-9]{4,5}\-[0-9]{4}/)
    
    if(telefoneRegex.test(telefone)) {
        telefone.value = telefone.replace('(', 'a')
        
        formulario.submit()
    } else {
        alert('O telefone é inválido. Insira no padrão: (xx)xxxxx-xxxxx')
    }
}
