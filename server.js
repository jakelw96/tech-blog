const path = require('path');
const express = require('express');
const serverRoutes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// Activates routes
app.use(serverRoutes);

// Getting connected to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Server has been awakened!'));
});