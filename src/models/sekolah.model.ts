import {DataTypes, Model, Optional} from 'sequelize';
import sequelize from "../config/database";

interface SekolahAttributes {
    id: number;
    nama_sekolah: string;
    npsn: string;
    alamat: string;
}

interface SekolahCreatonAttributes 
extends Optional<SekolahAttributes, 'id'> {}

class Sekolah
    extends Model<SekolahAttributes, SekolahCreatonAttributes>
    implements SekolahAttributes 
    {
        public id!: number;
        public nama_sekolah!: string;
        public npsn!: string;
        public alamat!: string;
    }

    Sekolah.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nama_sekolah: {
                type: DataTypes.STRING,
                allowNull: false
            },
            npsn: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            alamat: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        },
        {
            sequelize,
            tableName: 'sekolah',
            timestamps: true
        }
    );

export default Sekolah;