import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Adresse } from "./Adresse";
import { Contact } from "./Contact";
import { Mine } from "./Mine";

export class Concession extends Model {
    public id!: number;
    public name!: string;
    public siret!: number;
    public license!: string;
    public phone?: number;
    public adresses_id!: number;
    // Relations
    public Mines!: Mine;
    public Contacts!: Contact;
}

Concession.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(40),
        allowNull: false,
        validate: {
            max: 39,
            is: /^[a-zA-Z\d\-'\s]+$/i
        }
    },
    siret: {
        type: DataTypes.CHAR(12),
        allowNull: false,
    },
    license: {
        type: DataTypes.STRING(512),
        allowNull: false
    },
    phone: {
        type: DataTypes.CHAR(10),
        allowNull: true
    },
    adresses_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Adresse,
            key: 'id',
        }
    }
},
{
    sequelize,
    tableName: 'concessions',
    timestamps: false,
});
Concession.belongsTo(Adresse, { foreignKey: 'adresses_id' });
Adresse.hasOne(Concession, { foreignKey: 'adresses_id' });