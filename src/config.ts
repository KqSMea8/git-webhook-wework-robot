import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });

export interface IConfig {
    port: number;
    debugLogging: boolean;
    dbsslconn: boolean;
    jwtSecret: string;
    databaseUrl: string;
    chatid: string; // 暂时机器人id由配置文件管理，之后可以考虑由GUI提供动态配置
}

const config: IConfig = {
    port: +process.env.PORT || 3000,
    debugLogging: process.env.NODE_ENV == "development",
    dbsslconn: process.env.NODE_ENV != "development",
    jwtSecret: process.env.JWT_SECRET || "your-secret-whatever",
    databaseUrl:
        process.env.DATABASE_URL || "postgres://user:pass@localhost:5432/apidb",
    chatid: "7048958e-8b4b-4381-9758-af84347c240c" // 这个是jenkins-robot
};

export { config };
