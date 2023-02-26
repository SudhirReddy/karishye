module.exports = {
  HOST: "demo.divami.com",
  USER: "karishyebackend",
  PASSWORD: "karishyebackend",
  DB: "karishyebackend",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
