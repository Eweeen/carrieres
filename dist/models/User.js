"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: sequelize_1.DataTypes.STRING(39),
        allowNull: false,
        validate: {
            max: 39,
            is: /^[a-zA-Z\d\-'\s]+$/i
        }
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING(39),
        allowNull: false,
        validate: {
            max: 39,
            is: /^[a-zA-Z\d\-'\s]+$/i
        }
    },
    mail: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: sequelize_1.DataTypes.STRING(39),
        allowNull: false
    },
    isAdmin: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize: database_1.sequelize,
    tableName: 'users',
    timestamps: false,
});
