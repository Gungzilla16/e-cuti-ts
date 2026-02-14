import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

export enum UserRole {
    OPERATOR = "operator_sekolah",
    KEPALA_SEKOLAH = "kepala_sekolah",
    KASI = "kasi_ptk",
    ADMIN = "admin_sudin"
}

interface UserAttributes {
    id: number;
    name: string;
    email: string;
    password: string;
    role: UserRole;
    sekolah_id?: number | null;
    is_active: boolean;
}

interface UserCreationAttributes 
extends Optional<UserAttributes, "id" | "is_active"> {}

class User 
    extends Model<UserAttributes, UserCreationAttributes>
    implements UserAttributes
    {
        public id!: number;
        public name!: string;
        public email!: string;
        public password!: string;
        public role!: UserRole;
        public sekolah_id?: number | null;
        public is_active!: boolean;
    }

    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            role: {
                type: DataTypes.ENUM(
                    UserRole.OPERATOR,
                    UserRole.KEPALA_SEKOLAH,
                    UserRole.KASI,
                    UserRole.ADMIN
                ),
                allowNull: false
            },
            sekolah_id: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            is_active: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            }
        },
        {
            sequelize,
            tableName: "users",
            timestamps: true,
            indexes: [
                {
                    unique: true,
                    fields: ["sekolah_id", "role"]
                }
            ]
        }
    );

export default User;