const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');

// Getting connected to db and server
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Server has been awakened!'));
});