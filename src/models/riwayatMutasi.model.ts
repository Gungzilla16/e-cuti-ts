import {DataTypes, Model, Optional} from 'sequelize';
import sequelize from "../config/database";

interface MutasiAttributes {
    id: number;
    pegawai_id: number;
    sekolah_id_lama: number;
    sekolah_id_baru: number;
    tanggal_mutasi: Date;
    keterangan?: string;
}

interface MutasiCreationAttributes
extends Optional<MutasiAttributes, 'id'> {}

class RiwayatMutasi
    extends Model<MutasiAttributes, MutasiCreationAttributes>
    implements MutasiAttributes
    {
        public id!: number;
        public pegawai_id!: number;
        public sekolah_id_lama!: number
        public sekolah_id_baru!: number;
        public tanggal_mutasi!: Date;
        public keterangan?: string;
    }

RiwayatMutasi.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        pegawai_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sekolah_id_lama: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sekolah_id_baru: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tanggal_mutasi: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        keterangan: {
            type: DataTypes.TEXT,
        }
    },
    {
        sequelize,
        tableName: 'riwayat_mutasi',
        timestamps: true
    }
);

export default RiwayatMutasi;