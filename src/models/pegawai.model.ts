import {DataTypes, Model, Optional} from 'sequelize';
import sequelize from "../config/database";

interface PegawaiAttributes {
    id: number;
    nama: string;
    nikki: string;
    jenis: "guru" | "tenaga_kependidikan";
    sekolah_id: number;
}

interface PegawaiCreationAttributes
extends Optional<PegawaiAttributes, 'id'> {}

class Pegawai
    extends Model<PegawaiAttributes, PegawaiCreationAttributes>
    implements PegawaiAttributes
    {
        public id!: number;
        public nama!: string;
        public nikki!: string;
        public jenis!: "guru" | "tenaga_kependidikan";
        public sekolah_id!: number;
    }

    Pegawai.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: true
            },
            nama: {
                type: DataTypes.STRING,
                allowNull: false
            },
            nikki: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            jenis: {
                type: DataTypes.ENUM("guru", "tenaga_kependidikan"),
                allowNull: false
            },
            sekolah_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        {
            sequelize,
            tableName: 'pegawai',
            timestamps: true
        }
    );

export default Pegawai;
