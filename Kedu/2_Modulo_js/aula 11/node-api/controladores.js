let users = [{
  id: 1,
  name: "Fernanda",
  age: 25,
  city: "Salvador",
}]

/* const getUsers = (req, res) => {
  return res.json({users})
}
 */


const getUsers = (req, res) => {
  //parametros de pesquisa são captados se você passar o 
  //nome da rota e um parametro após um ?
  //a rota fica http://localhost:80/api?name=nanda&city=sal

  //name=fern&city=sal

  let filteredUsers = []

  if(req.query.name && req.query.city) {
    /* caso você passe os dois parâmetros de pesquisa na rota, ele irá filtrar apenas os usuarios onde o 
    nome e a cidade correspondam a pelo menos uma parte da pesquisa. Isso significa que você pode mandar
    apenas uma parte do nome (ou cidade) no parâmetro que ele irá funcionar. Neste caso,
    a função retorna logo os valores filtrados*/
    
    filteredUsers = users.filter(user =>user.name.toLowerCase().includes(req.query.name) && user.city.toLowerCase().includes(req.query.city.toLowerCase()))

    return res.json(filteredUsers)
  }

  if(req.query.name) {
    /* Caso apenas o parametro name seja passado, ele irá filtrar os elementos apenas pelo nome e adicionar um 
    grande array de fitros. Isso significa que filteredUsers pode receber elementos de vários filtros ao mesmo tempo.
    Caso você queira que os filtros de name e de city funcionem ao mesmo tempo, sem que seja necessário que 
    o usuario tenha exclusivamente um nome e uma cidade que passem no filtro ao mesmo tempo, você pode retirar a 
    condicional acima */
    let usersByName = users.filter(user => user.name.toLowerCase().includes(req.query.name.toLowerCase()))
    
    filteredUsers.push(...usersByName)
  }

  if(req.query.city) {
    /* Caso a pessoa passe apenas o parametro de city */
    let usersByCity = users.filter(user => user.city.toLowerCase().includes(req.query.city.toLowerCase()))
    
    filteredUsers.push(...usersByCity)
  }

  /* Caso a pessoa não tenha passado nenhum dos parametros e o array de filtros esteja vazio, ele envia o array
  original com todos os elementos. Senão, se o array de filtros está vazio mas você recebeu pelo menos um dos
  parametros ele irpa enviar o array vazio, para exemplificar para o usuario (no front-end) que a pesquisa 
  não retornou resultados */
  return res.json(filteredUsers.length <= 0 && (req.query.name || req.query.city) ? filteredUsers : users )
} 


const getUser = (req, res) => {
  try {
    const user = users.find(user => Number(user.id) === Number(req.params.id))
    return res.json(user)

  } catch(error){
      return res.status(404).json('Usuário não encontrado!')
  }
}

const createUser = (req, res) => {
  const { name, age, city } = req.body;

  try {
    const lastId = users.length > 0 ? users[users.length - 1].id : 0
    users.push({
      id: lastId + 1,
      name,
      age,
      city
    })
    
    return res.json('Usuário cadastrado com sucesso!')

  } catch (e) {
    return res.status(400).json("Aconteceu algum erro:" + e.message)
  }
}

const updateUser = (req, res) => {
  const user = users.find(user => Number(user.id) === Number(req.params.id))

  if (!user) {
    return res.json('Usuário não encontrado')
  }

  const updatedUser = {
    ...user,
    name: req.body.name ? req.body.name : user.name,
    age: req.body.age ? req.body.age : user.age,
    city: req.body.city ? req.body.city : user.city
  }

  users = users.map(user => {
    if (Number(user.id) === Number(req.params.id)) {
      user = updatedUser
    }
    return user
  })

  return res.json(`Usuário ${updatedUser.name} atualizado com sucesso`)
}

const deleteUser = (req, res) => {
  const user = users.find(user => Number(user.id) === Number(req.params.id))

  if (!user) {
    return res.json('Usuário não encontrado')
  }

  users = users.filter(user => Number(user.id) !== Number(req.params.id))

  return res.json(`Usuário ${user.name} deletado com sucesso!`)
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}