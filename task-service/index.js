import express from "express";
import { ENV_VARS } from "./envVars.js";
import bodyParser from "body-parser";
import { dbConnect } from "./database/dbConfig.js";
import { connectRabbitMq } from "./message.queue.js";

const startServer = async () => {
    const app = express();
    app.use(bodyParser.json());

    await dbConnect();              // Connect to DB
    await connectRabbitMq();        // Connect to RabbitMQ BEFORE route import

    const taskRoutes = (await import("./routes/task.routes.js")).default;
    app.use('/api/v1/', taskRoutes);

    app.listen(ENV_VARS.SERVER_PORT, () => {
        console.log(`Task Service listening on port ${ENV_VARS.SERVER_PORT}`);
    });
};

startServer().catch((err) => {
    console.error("Failed to start server:", err);
});
