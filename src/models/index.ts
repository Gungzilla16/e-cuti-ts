import sequilize from '../config/database';

import Sekolah from './sekolah.model';
import User from './user.model';
import Pegawai from './pegawai.model';
import Cuti from './cuti.model';
import ApprovalLog from './approvalLog.model';
import RiwayatMutasi from './riwayatMutasi.model';

/* =================================================
    SEKOLAH RELATION
================================================= */

//Sekolah - User
Sekolah.hasMany(User, {
    foreignKey: 'sekolah_id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
});
User.belongsTo(Sekolah, {
    foreignKey: 'sekolah_id'
});

//Sekolah - Pegawai
Sekolah.hasMany(Pegawai, {
    foreignKey: 'sekolah_id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
});
Pegawai.belongsTo(Sekolah, {
    foreignKey: 'sekolah_id'
});

/* =================================================
    PEGAWAI RELATION
================================================= */

//Pegawai - Cuti
Pegawai.hasMany(Cuti, {
    foreignKey: 'pegawai_id',
    onDelete: 'CASCADE'
});
Cuti.belongsTo(Pegawai, {
    foreignKey: 'pegawai_id'
});

//Pegawai - RiwayatMutasi
Pegawai.hasMany(RiwayatMutasi, {
    foreignKey: 'pegawai_id',
    onDelete: 'CASCADE'
});
RiwayatMutasi.belongsTo(Pegawai, {
    foreignKey: 'pegawai_id'
});

/* =================================================
    CUTI RELATION
================================================= */

//Cuti - ApprovalLog
Cuti.hasMany(ApprovalLog, {
    foreignKey: 'cuti_id',
    onDelete: 'CASCADE'
});
ApprovalLog.belongsTo(Cuti, {
    foreignKey: 'cuti_id'
});

/* =================================================
    USER RELATION
================================================= */

//User - Approval Log
User.hasMany(ApprovalLog, {
    foreignKey: 'approved_by',
});
ApprovalLog.belongsTo(User, {
    foreignKey: 'approved_by',
     onDelete: 'SET NULL'
});

//User - Cuti (sebagai pemohon)
User.hasMany(Cuti, {
    foreignKey: 'pegawai_id',
    onDelete: 'SET NULL'
});
Cuti.belongsTo(User, {
    foreignKey: 'pegawai_id'
});

/* =================================================
    RIWAYAT MUTASI RELATION
================================================= */

//Sekolah Lama
Sekolah.hasMany(RiwayatMutasi, {
    foreignKey: 'sekolah_id_lama',
    as: 'mutasiLama',
});
RiwayatMutasi.belongsTo(Sekolah, {
    foreignKey: 'sekolah_id_lama',
    as: 'sekolahLama',
});

//Sekolah Baru
Sekolah.hasMany(RiwayatMutasi, {
    foreignKey: 'sekolah_id_baru',
    as: 'mutasiBaru'
});
RiwayatMutasi.belongsTo(Sekolah, {
    foreignKey: 'sekolah_id_baru',
    as: 'sekolahBaru'
});

export {
    sequilize,
    Sekolah,
    User,
    Pegawai,
    Cuti,
    ApprovalLog,
    RiwayatMutasi
};
