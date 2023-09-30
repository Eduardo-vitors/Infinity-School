* Documentação API Marcação de consulta *

Se alguma rota der erro, o retorno virá com um status 404. Você consegue captar o o status, e se for 404 você pode criar um alerta com uma mensagem de erro para o usuário. Todas as rotas possuem como base a rota indicada abaixo.

** Rotas:

* BASE: http://localhost:80/api

* GET:
  '/consultas' - Retorna uma lista todas as especialidades de marcação de consultas no formato abaixo:
     [{
        id: 1,
        especialidade: "Ginecologista",
        datasDisponiveis: [
          {id: 1, data:"05/05/2023, 09:00"},
          {id: 2, data:"05/05/2023, 10:00"},
          {id: 3, data: "05/05/2023, 11:00"},
          {id: 4, data: "05/05/2023, 12:00"},
          {id: 5, data: "05/05/2023, 13:00"},
          {id: 6, data: "05/05/2023, 14:00"},
        ]
      }]

  '/consultas/:id' - Retorna a especialidade de acordo com o id no formato abaixo:
    {
    id: 1,
    especialidade: "Ginecologista",
    datasDisponiveis: [
      {id: 1, data:"05/05/2023, 09:00"},
      {id: 2, data:"05/05/2023, 10:00"},
      {id: 3, data: "05/05/2023, 11:00"},
      {id: 4, data: "05/05/2023, 12:00"},
      {id: 5, data: "05/05/2023, 13:00"},
      {id: 6, data: "05/05/2023, 14:00"},
    ]
  }

  '/marcadas' - Retorna uma lista de todas as consultas marcadas no formato abaixo: 
    array = [{
      id: 1,
      nome: "Fernanda",
      telefone: "71987799200",
      convenio: false,
      data: {
        id: id da data,
        data: string
      },
      especialidade: {
        id: id da especialidade,
        nome: string
      }
    }]

  '/consultas/marcadas/:id' - Retorna uma consulta de acordo com o id no formato abaixo:
    objeto = {
      id: 1,
      nome: "Fernanda",
      telefone: "71987799200",
      convenio: false,
      data: {
        id: id da data,
        data: string
      },
      especialidade: {
        id: id da especialidade,
        nome: string
      }
    }

* POST:
  '/consultas' - Cria uma nova consulta e retorna uma mensagem se tudo ocorrer bem. Os dados enviados precisam estar no formato abaixo:
    {
      nome: string,
      telefone: string,
      convenio: boolean,
      id_data: id da data,
      id_especialidade: id da especialidade
    }

    mensagem de sucesso: "Consulta marcada com sucesso"

* PUT:
  '/consultas/marcadas/:id' - Atualiza uma consulta de acordo com o id e retorna uma mensagem se tudo ocorrer bem. Os dados precisam estar neste formato:
      {
        telefone: string, (opcional passar)
        convenio: boolean,
        id_data: id da data
      }

* DELETE:
  '/consultas/:id' - Deleta a consulta marcada de acordo com o id e retorna uma mensagem se tudo ocorrer bem