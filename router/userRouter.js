const express = require('express');
const router = express.Router(); //创建router对象

//导入userSchema
const userSchema = require('../schema/userSchema');
// 导入验证数据的中间件
const expressJoi = require('@escook/express-joi');

//导入userSchema2,自定义规则
const userSchema2 = require('../schema/userSchema2');

//导入userRouterHandler
const userRouterHandler = require('../router_handler/userRouterHandler');

router.get('/get', expressJoi(userSchema.query_user_info_schema), userRouterHandler.getUserInfo);

//router.post('/add', expressJoi(userSchema.add_user_info_schema), userRouterHandler.addUserInfo);

router.post('/add', userSchema2, userRouterHandler.addUserInfo);

router.post('/update', userSchema2, userRouterHandler.updateUserInfo);



router.get('/', (req, res) => {
     res.send('hello world');
});


module.exports = router;
