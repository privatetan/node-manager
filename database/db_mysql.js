const mysql = require('mysql');

/**
 * mysql 配置文件
 * @type {Pool}
 */
db_mysql = mysql.createPool({
    host: '150.158.55.44',
    user: 'sshUser',
    password: 'sshRoot5544',
    database: 'tt_data',
});

module.exports = db_mysql;