import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class User extends Model {
    public id!: number;
    public firstname!: string;
    public lastname!: string;
    public mail!: string;
    public password!: string;
    public isAdmin!: boolean;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING(39),
        allowNull: false,
        validate: {
            max: 39,
            is: /^[a-zA-Z\d\-'\s]+$/i
        }
    },
    lastname: {
        type: DataTypes.STRING(39),
        allowNull: false,
        validate: {
            max: 39,
            is: /^[a-zA-Z\d\-'\s]+$/i
        }
    },
    mail: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING(39),
        allowNull: false
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'users',
    timestamps: false,
});