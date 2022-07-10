module.exports = function(sequelize, dataTypes) {
    let alias = "Sponsor";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11), primaryKey: true, autoIncrement: true, allowNull: false
        },
        name: {
            type: dataTypes.TEXT(100), allowNull: false
        },
        img: {
            type: dataTypes.TEXT(100)
        },        
        status: {
            type: dataTypes.INTEGER(11), allowNull: false
        }
    }
    
    let config = {
        tableName: 'sponsores',
        timestamps: false
    }

    let Sponsor = sequelize.define(alias, cols, config)

    return Sponsor;
}