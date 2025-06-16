import express from "express";
import { ENV_VARS } from "./envVars.js";
import bodyParser from "body-parser";
import { dbConnect } from "./database/dbConfig.js";
import taskRoutes from "./routes/task.routes.js"
const app=express();

app.use(bodyParser.json());

app.use('/api/v1/',taskRoutes);

app.listen(ENV_VARS.SERVER_PORT,()=>{
    dbConnect();
    console.log(`Task Service listening on port ${ENV_VARS.SERVER_PORT}`);
});