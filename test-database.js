var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "Timothy Pan",
    password: "$Flameslinger88"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});