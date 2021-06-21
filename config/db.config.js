module.exports = {
    HOST: 'localhost',
    USER: 'noir',
    PASSWORD: 'Masiania1972',
    DB: 'profile_app',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}