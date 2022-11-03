"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const Concession_1 = require("./Concession");
class Contact extends sequelize_1.Model {
}
exports.Contact = Contact;
Contact.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING(39),
        allowNull: false,
        validate: {
            max: 39,
            is: /^[a-zA-Z\d\-'\s]+$/i
        }
    },
    firstname: {
        type: sequelize_1.DataTypes.STRING(39),
        allowNull: true,
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
    phone: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: true
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
    tableName: 'contacts',
    timestamps: false,
});
Contact.belongsTo(Concession_1.Concession, { foreignKey: 'concessions_id' });
Concession_1.Concession.hasMany(Contact, { foreignKey: 'concessions_id' });
