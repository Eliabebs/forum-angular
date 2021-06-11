const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('projeto_final', 'root', 'cbkfk1', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
})

sequelize.authenticate().then(() => {
  console.log('Conexão com o banco concluída')
}).catch((error) => {
  console.log(error)
})

module.exports = sequelize