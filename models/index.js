const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const config = require('../config.js').mysql;
const sequelize = new Sequelize(config.database, config.username, config.password, {
    dialect: 'mysql',
    host: config.host,
    port: config.port
})
const userModel = require('./users.js');
module.exports = function(){
    sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        userModel(Sequelize,sequelize,Model);
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
}