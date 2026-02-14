import sequelize from "./config/database";
import { seedAdminUser } from "./seeders/adminSeeder";


(async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully.");
        
        await sequelize.sync({ alter: true });
        console.log("All models synchronized successfully.");

        await seedAdminUser();

    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();