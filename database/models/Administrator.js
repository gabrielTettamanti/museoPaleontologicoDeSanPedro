module.exports = function(sequelize, dataTypes) {
    let alias = "Admin";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11), primaryKey: true, autoIncrement: true, allowNull: false
        },
        email: {
            type: dataTypes.TEXT(100), allowNull: false
        },
        password: {
            type: dataTypes.TEXT(200), allowNull: false
        },
        password_conf: {
            type: dataTypes.TEXT(200), allowNull: false
        },        
        status: {
            type: dataTypes.INTEGER(11), allowNull: false
        }
    }

    let config = {
        tableName: 'administrators',
        timestamps: false
    }

    let Admin = sequelize.define(alias, cols, config)

    return Admin;
}