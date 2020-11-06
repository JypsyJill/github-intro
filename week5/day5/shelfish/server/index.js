require('dotenv').config();
const express = require('express');
const ctrl = require('./controller');
const massive = require('massive');
const { findAllByTestId } = require('@testing-library/react');
const app = express();
const{SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());
app.listen(SERVER_PORT, () => {
    console.log(`Your database is connected. It's not rocket science, but it is science. Listening on port ${SERVER_PORT}`);
})
massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
    
}).then( db => {
    app.set('db', db);
    console.log("Your database is connected. It's not rocket science, but it is science.")
}).catch( err => console.log(err));

