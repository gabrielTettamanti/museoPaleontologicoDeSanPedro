module.exports = function(sequelize, dataTypes) {
    let alias = "Subscriber";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11), primaryKey: true, autoIncrement: true, allowNull: false
        },
        email: {
            type: dataTypes.STRING(100), allowNull: false
        },       
        status: {
            type: dataTypes.INTEGER, allowNull: false
        }
    }

    let config = {
        tableName: 'subscribers',
        timestamps: false
    }

    let Suscriptor = sequelize.define(alias, cols, config)

    return Suscriptor;
}