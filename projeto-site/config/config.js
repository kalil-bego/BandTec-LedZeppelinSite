var mysql = require('mysql');

module.exports = {
    production: {
        username: 'estudos',
        password: 'Bandtec2020',
        database: 'projetopiled',
        host: 'localhost',
        dialect: 'mysql',
        xuse_env_variable: 'DATABASE_URL',
        dialectOptions: {
            options: {
                encrypt: true
            }
        },
        pool: {
            max: 5,
            min: 1,
            acquire: 5000,
            idle: 30000,
            connectTimeout: 5000
        }
    }
};