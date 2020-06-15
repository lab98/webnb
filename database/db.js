var mysql = require("mysql");
/***connection to db
 *
 */


var connection = mysql.createConnection({
    host: "localhost",
    user: "lucalb98",
    password: "lucalb98",
    database: "webnb",
});

connection.connect(function (error) {
    if (error) {
        console.log("error not connected");
    } else {
        console.log("Connected");
    }
});

connection.query("SELECT * FROM utente", function (err, rows, fields) {
    if (err) throw err;
    console.log("The solution is: ", rows[0]);
});

connection.end();