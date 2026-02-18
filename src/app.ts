import express from "express";
import sequelize from "./config/database";
import { seedAdminUser } from "./seeders/adminSeeder";
import authRoutes from "./routes/auth.routes";
import dotenv from "dotenv";

dotenv.config();

const app =  express();

//middleware body parser
app.use(express.json());

// routes
app.use('/api/auth', authRoutes);

//database init
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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

