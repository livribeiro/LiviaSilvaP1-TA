const my_database = new Map()

const listAll = (req, res) => {
  const values = Array.from(my_database.values())
  res.status(200).send(values)
}

const create = (req, res) => {
  const customers = req.body
  my_database.set(customers.cpf, customers)
  res.status(201).send(customers)
}

const update = (req, res) => {
  const cpf = parseInt(req.params.cpf, 10)

  if (my_database.has(cpf)) {
    const customers = req.body
    customers.cpf = cpf
    my_database.set(cpf, customers)
    res.status(200).send(customers)
  } else {
    res.status(404).send({
      message: `user with cpf (${cpf}) not found`
    })
  }
}

const remove = (req, res) => {
  const cpftitular = parseInt(req.params.cpftitular, 10)

  if (my_database.has(cpftitular)) {
    const customers = my_database.get(cpftitular)
    my_database.delete(customers.cpftitular)
    res.status(200).send(customers)
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