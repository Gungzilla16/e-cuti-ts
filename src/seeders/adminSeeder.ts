import bcrypt from "bcrypt";
import { User } from "../models";
import { UserRole } from "../models/user.model";

export const seedAdminUser = async () => {
    try {
        const existingAdmin = await User.findOne({ 
            where: { email: "jp1.ptk@edu.jakarta.go.id" }
        });

        if (existingAdmin) {
            console.log("Admin user already exists");
            return;
        }
        
        const hashedPassword = await bcrypt.hash("admin123", 10);

        await User.create({
            name: "Admin JP1",
            email: "jp1.ptk@edu.jakarta.go.id",
            password: hashedPassword,
            role: UserRole.ADMIN,
            sekolah_id: null

        });

        console.log("Admin user seeded successfully");
    } catch (error) {
        console.error("Error seeding admin user:", error);
    }
};