import { DataTypes, Model } from "sequelize"
import { sequelize } from "../config/database";

export class Adresse extends Model {
    public id!: number;
    public street!: string;
    public complement!: string;
    public zipcode!: number;
    public town!: string;
}

Adresse.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    street: {
        type: DataTypes.STRING(39),
        allowNull: false,
    },
    complement: {
        type: DataTypes.STRING(39),
        allowNull: false,
    },
    zipcode: {
        type: DataTypes.CHAR(5),
        allowNull: false,
    },
    town: {
        type: DataTypes.STRING(39),
        allowNull: false,
    }
}, {
    sequelize,
    tableName: 'mines',
    timestamps: false,
});