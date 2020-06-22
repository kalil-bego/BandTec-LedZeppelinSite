'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario', {
        id: {
            field: 'idUser',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            field: 'email',
            type: DataTypes.STRING,
            allowNull: false
        },
        login: {
            field: 'usuario',
            type: DataTypes.STRING,
            allowNull: false
        },
        senha: {
            field: 'senha',
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'users',
        freezeTableName: true,
        underscored: true,
        timestamps: false,
    });

    return Usuario;
};