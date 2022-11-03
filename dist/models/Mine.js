"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mine = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const Concession_1 = require("./Concession");
class Mine extends sequelize_1.Model {
}
exports.Mine = Mine;
Mine.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING(39),
        allowNull: false,
        validate: {
            max: 39,
            is: /^[a-zA-Z\d\-'\s]+$/i
        }
    },
    longitude: {
        type: sequelize_1.DataTypes.DECIMAL(15, 12),
        allowNull: false
    },
    latitude: {
        type: sequelize_1.DataTypes.DECIMAL(15, 12),
        allowNull: false
    },
    concessions_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Concession_1.Concession,
            key: 'id',
        }
    }
}, {
    sequelize: database_1.sequelize,
    tableName: 'mines',
    timestamps: false,
});
Mine.belongsTo(Concession_1.Concession, { foreignKey: 'concessions_id' });
Concession_1.Concession.hasMany(Mine, { foreignKey: 'concessions_id' });
