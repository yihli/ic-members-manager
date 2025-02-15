require('dotenv').config()

const DATABASE_HOST = process.env.DATABASE_HOST
const DATABASE_NAME = process.env.DATABASE_NAME
const DATABASE_USER = process.env.DATABASE_USER
const DATABASE_PW = process.env.DATABASE_PW

module.exports = {
    DATABASE_HOST,
    DATABASE_NAME,
    DATABASE_USER,
    DATABASE_PW
}