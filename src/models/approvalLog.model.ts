import {DataTypes, Model, Optional} from 'sequelize';
import sequelize from "../config/database";

interface ApprovalAttributes {
    id: number;
    cuti_id: number;
    approved_by: number;
    role: string;
    status: string;
    catatan?: string;
    approved_date: Date;
}

interface ApprovalCreationAttributes
extends Optional<ApprovalAttributes, 'id'> {}

class ApprovalLog
    extends Model<ApprovalAttributes, ApprovalCreationAttributes>
    implements ApprovalAttributes
    {
        public id!: number;
        public cuti_id!: number;
        public approved_by!: number;
        public role!: string;
        public status!: string;
        public catatan?: string;
        public approved_date!: Date;
    }

    ApprovalLog.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            cuti_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            approved_by: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            role: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
                catatan: {
                    type: DataTypes.TEXT,
                },
                approved_date: {
                    type: DataTypes.DATE,
                    allowNull: false,
                }
            },
            {
                sequelize,
                tableName: 'approval_log',
                timestamps: true
            }
        );

export default ApprovalLog;
        
