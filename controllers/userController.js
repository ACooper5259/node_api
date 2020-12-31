const {sequelize, User} = require('../models');

const createUser = async(req, res) => {
  const { firstName, lastName, email, password, admin } = req.body

  try {
    const user = await User.create({firstName, lastName, email, password,admin})
    return res.json(user)
  }
  catch(err) {
    return res.status(500).json({ error: error.message })
  }
};

module.exports = {
  createUser
}