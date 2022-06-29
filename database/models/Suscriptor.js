module.exports = function(sequelize, dataTypes) {
    let alias = "Suscriptor";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11), primaryKey: true, autoIncrement: true, allowNull: false
        },
        email: {
            type: dataTypes.TEXT(100), allowNull: true
        },       
        status: {
            type: dataTypes.INTEGER(11), allowNull: true
        }
    }

    let config = {
        tableName: 'subscribers',
        timestamps: false
    }

    let Suscriptor = sequelize.define(alias, cols, config)

    return Suscriptor;
}