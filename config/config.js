module.exports =
{
  "development": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "gbkt",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "gbkt",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": process.env.JAWSDB_URL,
    "dialect": "mysql"
  }
}
