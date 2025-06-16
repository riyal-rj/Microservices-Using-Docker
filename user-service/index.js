import express from "express";
import { ENV_VARS } from "./envVARS.js";
import bodyParser from "body-parser";
import { dbConnect } from "./database/dbConnect.js";
import userRoutes from "./routes/user.routes.js"
const app=express();

app.use(bodyParser.json());

app.use('/api/v1/',userRoutes);

app.listen(ENV_VARS.SERVER_PORT,()=>{
    dbConnect();
    console.log(`User Service listening on port ${ENV_VARS.SERVER_PORT}`);
});
