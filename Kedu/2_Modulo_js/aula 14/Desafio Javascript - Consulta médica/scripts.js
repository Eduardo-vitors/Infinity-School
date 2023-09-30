especialista = document.getElementById("especialidades")
data= document.getElementById("datas_disponiveis")
formulario =document.querySelector("#marcar_consulta")
appointmentsContainer=document.querySelector(".appointments_container")

async function pegarEspecialista(){
    try{
        let resposta = await fetch("http://localhost:80/api/consultas")
        let dados = await resposta.json()
        return dados
    }catch(e){
        console.log(e)
    }
}

  async function pegarData(id){
    try{
        let resposta = await fetch(`http://localhost:80/api/consultas/${id}`)
        let dados = await resposta.json()
        data.innerHTML= " "
        dados.datasDisponiveis.forEach((datas,index,array)=>{
           data.innerHTML+=`<option value="${datas.id}"> ${datas.data} </option>`
        })
    }catch(e){
        console.log(e)
    }
  }

async function MostrarInfo(){
    const info = await pegarEspecialista()
/* 
    info.forEach(especialidade => `<option value="${especialidade.id}"> ${info[i].nome} </option>`) */
    for(let i=0;i<10;i++){
        especialista.innerHTML+=`<option value="${info[i].id}"> ${info[i].nome} </option>`
    }
    especialista.addEventListener("change",()=>{
       let identificador= especialista.value
       pegarData(identificador)
    })

}

async function AdicionarConsulta(){
    nome= document.querySelector("#nome").value
    telefone=document.querySelector("#telefone").value
    try{
        let resposta = await fetch("http://localhost:80/api/consultas",  {
            method:"POST",
            body:JSON.stringify({
                nome: nome,
                telefone: telefone,
                convenio: formulario.convenio.value,
                id_data: data.value,
                id_especialidade: especialista.value
            }), headers:{
                "Content-type": "application/json"
            }
        })
        let dados = await resposta.json()
        alert(dados)
        
    }catch(e){
        console.log(e)
    }
    mostraConsultas()
}

async function mostraConsultas(){
    try{
        let resposta = await fetch("http://localhost:80/api/marcadas")
        let dados = await resposta.json()
        dados.forEach(appointment => {
            appointmentsContainer.innerHTML+=`
            <div class="appointment">
                <h3>${appointment.especialidade.nome}</h3>
                <span>${appointment.data.data}</span>
                <button>Editar</button>
                <button>Desmarcar</button>
                </div>  `
        })
    }catch(e){
        console.log(e)
    }
}
MostrarInfo()

  
