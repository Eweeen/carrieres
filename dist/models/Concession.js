"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concession = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const Adresse_1 = require("./Adresse");
class Concession extends sequelize_1.Model {
}
exports.Concession = Concession;
Concession.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING(40),
        allowNull: false,
        validate: {
            max: 39,
            is: /^[a-zA-Z\d\-'\s]+$/i
        }
    },
    siret: {
        type: sequelize_1.DataTypes.CHAR(12),
        allowNull: false,
    },
    license: {
        type: sequelize_1.DataTypes.STRING(512),
        allowNull: false
    },
    phone: {
        type: sequelize_1.DataTypes.CHAR(10),
        allowNull: true
    },
    adresses_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Adresse_1.Adresse,
            key: 'id',
        }
    }
}, {
    sequelize: database_1.sequelize,
    tableName: 'concessions',
    timestamps: false,
});
Concession.belongsTo(Adresse_1.Adresse, { foreignKey: 'adresses_id' });
Adresse_1.Adresse.hasOne(Concession, { foreignKey: 'adresses_id' });
