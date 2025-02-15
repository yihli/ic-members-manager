const { Sequelize } = require('sequelize')
const config = require('./utils/config')

console.log(config.DATABASE_HOST)

const sequelize = new Sequelize(config.DATABASE_NAME, config.DATABASE_USER, config.DATABASE_PW, {
    host: config.DATABASE_HOST,
    dialect: 'postgres'
})

const connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('Successfully connected to the database')
    } catch (error) {
        console.log('Could not connect to database: ', error)
    }
}

connectDB()