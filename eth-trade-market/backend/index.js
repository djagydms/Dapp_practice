const express = require('express');
const app = express();
const PORT = 4000;
const { Client } = require('pg');
const Web3 = require('web3');
const bodyParser = require('body-parser');

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const jsonParser = bodyParser.json();


web3.eth.getAccounts().then(geth_response => {
    //console.log(geth_response);

    // app.get('/',(req,res) =>{
    //     res.send('Hello World!')
    //     })
        
    const client = new Client({
        user: 'gydms',
        host: 'localhost',
        database: 'userdb',
        password: '1234',
        port: 5000,
    })
    client.connect()

    app.get('/wallet/account/all', (req, res) => {
        web3.eth.getAccounts().then(geth_response => {
           // console.log(geth_response);
            res.send(geth_response);
        });
    })
    app.get('/user/all', (req, res) => {
        client.query('SELECT username,wallet_address FROM users', (err, psql_response) => {
            res.send(psql_response.rows);
        })
    })

    app.post('/user/enroll', jsonParser, (req, res) => {
        console.log(req.body);
        var name = req.body.name;
        var password = req.body.password;
        var email = req.body.email;
        
        web3.eth.personal.newAccount(password).then(geth_response => {
            console.log(geth_response);
            
            var query = 'INSERT INTO users(email, username, password, wallet_address, created_on) \
                        VALUES($1, $2, $3, $4, $5)';
            var values = [email, name, password, geth_response, '2020-09-23 10:18:30'];

            client.query(query, values, (err, psql_response) => {
                if (err) {
                    res.send("db error");
                } else {
                    res.send("success");
                    console.log("psql:", psql_response.rows);
                }
            });
        });
    })
    
    //Server Start    
    app.listen(PORT,() =>{
        console.log(`API Server listening on port ${PORT}!`);
        });
})



// client.query('SELECT username FROM users WHERE email=\'kmk@pusan.ac.kr\' AND password = crypt(\'p@ssw0rd\', password)', (err, res) => {
//     console.log(res)
//     client.end()
// })




