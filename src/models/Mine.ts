import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Concession } from "./Concession";

export class Mine extends Model {
    public id!: number;
    public name!: string;
    public longitude!: number;
    public latitude!: number;
    public concessions_id!: number;
}

Mine.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(39),
        allowNull: false,
        validate: {
            max: 39,
            is: /^[a-zA-Z\d\-'\s]+$/i
        }
    },
    longitude: {
        type: DataTypes.DECIMAL(15, 12),
        allowNull: false
    },
    latitude: {
        type: DataTypes.DECIMAL(15, 12),
        allowNull: false
    },
    concessions_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Concession,
            key: 'id',
        }
    }
},
{
    sequelize,
    tableName: 'mines',
    timestamps: false,
});
Mine.belongsTo(Concession, { foreignKey: 'concessions_id' });
Concession.hasMany(Mine, { foreignKey: 'concessions_id' });