const my_database = new Map()

const listAll = (req, res) => {
  const values = Array.from(my_database.values())
  res.status(200).send(values)
}

const create = (req, res) => {
  const user = req.body
  my_database.set(user.cpf, user)
  res.status(201).send(user)
}

const update = (req, res) => {
  const cpf = parseInt(req.params.cpf, 10)

  if (my_database.has(cpf)) {
    const user = req.body
    user.cpf = cpf
    my_database.set(cpf, user)
    res.status(200).send(user)
  } else {
    res.status(404).send({
      message: `user with cpf (${cpf}) not found`
    })
  }
}

const remove = (req, res) => {
  const cpftitular = parseInt(req.params.cpftitular, 10)

  if (my_database.has(cpftitular)) {
    const user = my_database.get(cpftitular)
    my_database.delete(user.cpftitular)
    res.status(200).send(user)
  } else {
    res.status(404).send({
      message: `user with cpf titular (${cpftitular}) not found`
    })
  }
}

module.exports = {
  listAll,
  create,
  update,
  remove
}