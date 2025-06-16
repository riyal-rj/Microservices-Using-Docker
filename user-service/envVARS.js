import dotenv from "dotenv";
dotenv.config();

export const ENV_VARS={
    SERVER_PORT:process.env.SERVER_PORT,
    MONGODB_URI:process.env.MONGODB_URI
}