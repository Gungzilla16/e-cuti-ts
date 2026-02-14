import {DataTypes, Model, Optional} from 'sequelize';
import sequelize from "../config/database";

export enum JenisCuti {
    MELAHIRKAN = "melahirkan",
    IBADAH = "ibadah",
    REGULER = "reguler",
    ALASAN_PENTING = "alasan_penting",
}

interface CutiAttributes {
    id: number;
    pegawai_id: number;
    tanggal_mulai: Date;
    tanggal_selesai: Date;
    jenis_cuti: JenisCuti;
    alasan: string;
    status: "menunggu" | "disetujui" | "ditolak";
}

interface CutiCreationAttributes
extends Optional<CutiAttributes, 'id' | 'status'> {}

class Cuti
    extends Model<CutiAttributes, CutiCreationAttributes>
    implements CutiAttributes {
        public id!: number;
        public pegawai_id!: number
        public tanggal_mulai!: Date;
        public tanggal_selesai!: Date;
        public jenis_cuti!: JenisCuti;
        public alasan!: string;
        public status!: "menunggu" | "disetujui" | "ditolak";

        public readonly createdAt!: Date;
        public readonly updatedAt!: Date;
    }

    Cuti.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            pegawai_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: "pegawai", //harus sesuai nama tabel pegawai
                    key: "id"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },
            tanggal_mulai: {
                type: DataTypes.DATE,
                allowNull: false
            },
            tanggal_selesai: {
                type: DataTypes.DATE,
                allowNull: false
            },
            jenis_cuti: {
                type: DataTypes.ENUM(
                    "melahirkan",
                    "ibadah",
                    "reguler",
                    "alasan_penting"
                ),
                allowNull: false
            },
            alasan: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            status: {
                type: DataTypes.ENUM(
                    "menunggu", 
                    "disetujui", 
                    "ditolak"
                ),
                allowNull: false,
                defaultValue: "menunggu",
            },
        },
        {
            sequelize,
            modelName: "Cuti",
            tableName: "cuti",
            timestamps: true
        }
    );

export default Cuti;