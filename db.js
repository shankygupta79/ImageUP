const Sequelize = require('sequelize')
//emp','heey','mypass'
const db = new Sequelize('eFx6DJVPM2', 'eFx6DJVPM2', 'XDIawT0voC', {
    host:'remotemysql.com',
    dialect: 'mysql',
    port:3306,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Imgs = db.define('imgs', {
    
    ID:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
    },
    name:{
        type:Sequelize.STRING,
    },  
    imageurl:{
        type:Sequelize.STRING,
    }
    
})



db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    Imgs
}
