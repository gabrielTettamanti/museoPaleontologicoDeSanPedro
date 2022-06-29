module.exports = function(sequelize, dataTypes) {
    let alias = "Noticia";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11), primaryKey: true, autoIncrement: true, allowNull: false
        },
        title: {
            type: dataTypes.TEXT(100), allowNull: false
        },
        date: {
            type: dataTypes.DATE, allowNull: true
        },
        text: {
            type: dataTypes.TEXT(3000), allowNull: true
        },
        img: {
            type: dataTypes.TEXT(100), allowNull: true
        },
        status: {
            type: dataTypes.INTEGER(11), allowNull: false
        }
    }

    let config = {
        tableName: 'notices',
        timestamps: false
    }

    let Noticia = sequelize.define(alias, cols, config)

    return Noticia;
}