require("dotenv").config();
module.exports = {
  username: process.env.DB_USER,
  password: process.env.SUPABASE_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "postgres",
};
