import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Concession } from "./Concession";

export class Contact extends Model {
    public id!: number;
    public lastname!: string;
    public firstname?: string;
    public mail!: string;
    public phone?: number;
    public concessions_id!: number;
}

Contact.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    lastname: {
        type: DataTypes.STRING(39),
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING(39),
        allowNull: true
    },
    mail: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    phone: {
        type: DataTypes.STRING(10),
        allowNull: true
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
    tableName: 'contacts',
    timestamps: false,
});
Contact.belongsTo(Concession, { foreignKey: 'concessions_id' });
Concession.hasMany(Contact, { foreignKey: 'concessions_id' });