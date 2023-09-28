const hasError = (req, res, next) => {
  const name = req.body.name == null;
  const age = req.body.age == null;
  const city = req.body.city == null;

    if (!name || !age || !city) {
      next();
    }
    else {
      res.send("Faltam dados para a criação do usuário!");
    }
}

module.exports = {
  hasError
};