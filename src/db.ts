import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Redalert01",
  database: "typeormdb",
  entities: [User],
  logging: true,
  synchronize: true,
});
