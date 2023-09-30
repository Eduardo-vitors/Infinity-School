let especialidades = [
  {
    id: 1,
    nome: "Ginecologista",
    datasDisponiveis: [
      {id: 1, data:"05/05/2023, 09:00"},
      {id: 2, data:"05/05/2023, 10:00"},
      {id: 3, data: "05/05/2023, 11:00"},
      {id: 4, data: "05/05/2023, 12:00"},
      {id: 5, data: "05/05/2023, 13:00"},
      {id: 6, data: "05/05/2023, 14:00"},
    ]
  },
  {
    id: 2,
    nome: "Clinico Geral",
    datasDisponiveis: [
      {id: 1, data:"05/05/2023, 09:00"},
      {id: 2, data:"05/05/2023, 10:00"},
      {id: 3, data: "06/05/2023, 09:00"},
      {id: 4, data: "06/05/2023, 10:00"},
      {id: 5, data: "07/05/2023, 16:00"},
      {id: 6, data: "15/05/2023, 14:00"},
    ]
  },
  {
    id: 3,
    nome: "Cardiologista",
    datasDisponiveis: [
      {id: 1, data:"05/05/2023, 13:00"},
      {id: 2, data:"05/05/2023, 14:00"},
      {id: 3, data: "06/05/2023, 14:00"},
      {id: 4, data: "06/05/2023, 17:00"},
      {id: 5, data: "07/05/2023, 13:00"},
      {id: 6, data: "07/05/2023, 14:00"},
    ]
  },
  {
    id: 4,
    nome: "Oftalmologista",
    datasDisponiveis: [
      {id: 1, data:"09/05/2023, 13:00"},
      {id: 2, data:"09/05/2023, 14:00"},
      {id: 3, data: "09/05/2023, 15:00"},
      {id: 4, data: "12/05/2023, 07:00"},
      {id: 5, data: "12/05/2023, 09:00"},
    ]
  },
  {
    id: 5,
    nome: "Otorrino",
    datasDisponiveis: [
      {id: 1, data:"09/05/2023, 07:00"},
      {id: 2, data:"09/05/2023, 08:00"},
      {id: 3, data: "09/05/2023, 09:00"},
      {id: 4, data: "09/05/2023, 10:00"},
      {id: 5, data: "09/05/2023, 11:00"},
      {id: 6, data: "10/05/2023, 10:00"},
      {id: 7, data: "10/05/2023, 11:00"},
    ]
  },
  {
    id: 6,
    nome: "Urologista",
    datasDisponiveis: [
      {id: 1, data:"09/05/2023, 07:00"},
      {id: 2, data:"09/05/2023, 08:00"},
      {id: 3, data: "09/05/2023, 09:00"},
      {id: 4, data: "09/05/2023, 10:00"},
      {id: 5, data: "09/05/2023, 11:00"},
      {id: 6, data: "10/05/2023, 10:00"},
      {id: 7, data: "10/05/2023, 11:00"},
    ]
  },
  {
    id: 7,
    nome: "Gastroenterologista",
    datasDisponiveis: [
      {id: 1, data:"10/05/2023, 07:00"},
      {id: 2, data:"11/05/2023, 08:00"},
      {id: 3, data: "11/05/2023, 09:00"},
      {id: 4, data: "25/05/2023, 07:00"},
      {id: 5, data: "25/05/2023, 11:00"},
      {id: 6, data: "02/06/2023, 09:00"},
      {id: 7, data: "02/06/2023, 10:00"},
    ]
  },
  {
    id: 8,
    nome: "Dermatologia",
    datasDisponiveis: [
      {id: 1, data:"11/05/2023, 07:00"},
      {id: 2, data:"11/05/2023, 08:00"},
      {id: 3, data: "11/05/2023, 09:00"},
    ]
  },
  {
    id: 9,
    nome: "Pediatria",
    datasDisponiveis: [
      {id: 1, data:"05/05/2023, 07:00"},
      {id: 2, data:"05/05/2023, 08:00"},
      {id: 3, data: "05/05/2023, 09:00"},
      {id: 4, data: "08/05/2023, 08:00"},
      {id: 5, data: "08/05/2023, 09:00"},
      {id: 6, data: "08/05/2023, 10:00"},
      {id: 7, data: "08/05/2023, 11:00"},
      {id: 8, data: "12/05/2023, 08:00"},
      {id: 9, data: "13/05/2023, 09:00"},
    ]
  },
  {
    id: 10,
    nome: "Psiquiatria",
    datasDisponiveis: [
      {id: 1, data:"05/08/2023, 07:00"},
      {id: 2, data:"05/08/2023, 08:00"},
      {id: 3, data: "25/08/2023, 07:00"},
      {id: 4, data: "25/05/2023, 08:00"},
      {id: 5, data: "10/10/2023, 09:00"},
      {id: 6, data: "11/10/2023, 09:00"},
    ]
  },
]

let consultasMarcadas = [{
  id: 1,
  nome: "Fernanda",
  telefone: "71987799291",
  convenio: false,
  data: {
    id: 7,
    data: "19/08/2023, 14:00"
  },
  especialidade: {
    id: 1,
    nome: "Ginecologista"
  }
}]

const getEspecialidades = (req, res) => res.json(especialidades)

const getEspecialidade = (req, res) => {
  const { id } = req.params

  const especialidade = especialidades.find(especialidade => especialidade.id == id)

  if(!especialidade) {
    return res.status(404).json("Especialidade não encontrada")
  }

  return res.json(especialidade)
}

const getConsultasMarcadas = (req, res) => res.json(consultasMarcadas)

const getConsultaMarcada = (req, res) => {
  const { id } = req.params

  let consulta = consultasMarcadas.find(consulta => consulta.id === Number(id))

  if(!consulta) {
   return res.status(404).json("Consulta não encontrada")
  }
  
  return res.json(consulta)
}

const marcarNovaConsulta = (req, res) => {
  const { id_especialidade, nome, telefone, convenio, id_data } = req.body

    let especialidade = especialidades.find(especialidade => especialidade.id === Number(id_especialidade))

    if(!especialidade) {
      return res.status(404).json("Especialidade não encontrada")
    }

    let data = especialidade.datasDisponiveis.find(dataAberta => dataAberta.id === Number(id_data))

    if(!data) {
      return res.status(404).json("Data não encontrada")
    }
    
    especialidade.datasDisponiveis = especialidade.datasDisponiveis.filter(dataAberta => dataAberta.id !== Number(id_data))

    const ultimoId = consultasMarcadas.length > 0 ? consultasMarcadas[consultasMarcadas.length - 1].id : 0

    const novaConsulta = {
      id: ultimoId + 1,
      nome,
      telefone,
      convenio,
      data,
      especialidade: {
        id: especialidade.id,
        nome: especialidade.nome
      }
    }
    
    consultasMarcadas.push(novaConsulta)
    
  return res.json("Consulta marcada com sucesso!")
}

const desmarcarConsulta = (req, res) => {
  const { id } = req.params 
  
  const consultaMarcada = consultasMarcadas.find(consulta => consulta.id === Number(id))

  if(!consultaMarcada) {
    return res.json("Consulta não encontrada")
  }

  consultasMarcadas = consultasMarcadas.filter(consulta => consulta.id !== Number(id))

  let especialidade = especialidades.find(especialidade => especialidade.nome === consultaMarcada.especialidade.nome)

  especialidade.datasDisponiveis.splice(consultaMarcada.data.id, 0, consultaMarcada.data)      

  return res.json("Desmarcado com sucesso!")
}

const atualizarConsulta = (req, res) => {
  const { id } = req.params
  const { id_data, convenio, telefone } = req.body

  let consultaMarcada = consultasMarcadas.find(consulta => consulta.id === Number(id))

  if(!consultaMarcada) {
    return res.status(404).json("Consulta não encontrada")
  }

  let especialidade = especialidades.find(especialidade => especialidade.nome === consultaMarcada.especialidade.nome)
  let data = especialidade.datasDisponiveis.find(dataAberta => dataAberta.id === Number(id_data) )
    
  if(!data) {
    return res.status(404).json("Data não disponível")
  }

  especialidade.datasDisponiveis = especialidade.datasDisponiveis.filter(dataAberta => dataAberta.id !== data.id)
  especialidade.datasDisponiveis.splice(consultaMarcada.data.id, 0, consultaMarcada.data)  
  
  const updatedApointment = {
    ...consultaMarcada,
    convenio,
    data,
    telefone: telefone ? telefone : consultaMarcada.telefone
  }
  
  consultasMarcadas = consultasMarcadas.map(consulta => {
    if(consulta.id === consultaMarcada.id) {
      consulta = updatedApointment

      return consulta
    }
    
    return consulta
  })
  
    return res.json(`Consulta para a especialidade ${consultaMarcada.especialidade.nome} atualizada com sucesso!`)
}


module.exports = {
  getEspecialidades,
  getEspecialidade,
  marcarNovaConsulta,
  desmarcarConsulta,
  atualizarConsulta,
  getConsultasMarcadas,
  getConsultaMarcada
}