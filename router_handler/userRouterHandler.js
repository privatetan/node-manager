const db_mysql = require('../database/db_mysql');

exports.getUserInfo1 = (req, res) => {
    res.send('get UserInfo ');
}
/**
 * 查询用户信息
 * 
 * @param {请求参数} req 
 * @param {返回参数} res 
 */
exports.getUserInfo = (req, res) => {
    console.log(req.query.id);

    var querUserInfo = 'select * from node_user where id = ?';
    //执行sql
    db_mysql.query(querUserInfo, req.query.id, (err, results) => {
        if (err) {
            console.error(err)
            return res.send('发生错误' + err);
        }
        if (results.length === 0) {
            return res.send("用户信息不存在");
        }
        console.log(results);
        res.send(results);
    });
}

/**
 * 新增用户信息
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.addUserInfo = (req, res) => {
    console.log(req.body);

    //首先判断插入的用户信息是否存在
    var querUserInfo = 'select * from node_user where id = ?';
    db_mysql.query(querUserInfo, req.body.id, (err, results) => {
        if (err) {
            return res.send('添加用户信息失败！');
        }
        if (results.length !== 0) {
            return res.send('用户信息已经存在！');
        }
        var addUserSql = 'insert into node_user set ?';
        //注意：insert 参数使用{}
        db_mysql.query(addUserSql, { id: req.body.id, name: req.body.name, age: req.body.age }, (err, addResults) => {
            if (err) {
                return res.send('添加用户信息失败！');
            }
            console.log(addResults);
            res.send('用户信息添加成功！')
        });

    });

}

/**
 * 更新用户信息
 * @param {*} res 
 * @param {*} rep 
 */
exports.updateUserInfo = (req, res) => {
    console.log(req.body);

    let updateUserInfo = 'update node_user set name = ?, age = ? where id = ?';

    //注意：update参数，使用[]
    db_mysql.query(updateUserInfo, [req.body.name, req.body.age, req.body.id], (err, results) => {
        if (err) {
            console.info(err)
            return res.send("更新数据失败！");
        }
        console.log(results);
        if (results.affectedRows == 1) {
            res.send('更新成功！');
        }

    });
}
