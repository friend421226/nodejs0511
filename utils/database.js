const Sequelize = require('sequelize');

////////////////////////////////////////////////////////////

// database 是 Sequelize class 的實例(實體, instance) 
const database = new Sequelize('playground', 'root', '12345678', {
    dialect: 'mysql', 
    host: 'localhost'
});

// const database = new Sequelize ('cart-demo', 'admin', 'admin', {
// 	dialect: 'mysql',
// 	host: '130.211.120.155'
// });

module.exports = database;