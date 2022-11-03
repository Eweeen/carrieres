"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adresse = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Adresse extends sequelize_1.Model {
}
exports.Adresse = Adresse;
Adresse.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    street: {
        type: sequelize_1.DataTypes.STRING(39),
        allowNull: false,
    },
    complement: {
        type: sequelize_1.DataTypes.STRING(39),
        allowNull: false,
    },
    zipcode: {
        type: sequelize_1.DataTypes.CHAR(5),
        allowNull: false,
    },
    town: {
        type: sequelize_1.DataTypes.STRING(39),
        allowNull: false,
    }
}, {
    sequelize: database_1.sequelize,
    tableName: 'mines',
    timestamps: false,
});
