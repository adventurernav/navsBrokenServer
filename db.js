const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL,  { 
    dialect: 'postgres',
});

sequelize.authenticate()
    .then(
        function () {
            console.log('Connected to ' +process.env.NAME+ ' in Postgres');
        },
        err => { console.log(err) }
    )
    .catch(err => console.log(err))

User = sequelize.import('./models/userModel');

module.exports = sequelize;