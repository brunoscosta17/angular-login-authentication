const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'V3#10r3n',
    database: 'angular_login_auth'
});

mysqlConnection.connect((error) => {
    if(error) {
        console.log(error);
        return;
    } else {
        console.log('DB OK');
    }
});

module.exports = mysqlConnection;