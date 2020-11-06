
massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db);
    console.log("Successful connection to database, m'lord")
}).catch( err => console.log(err));

app.get('/api/doggos', ctrl.getDoggos);
