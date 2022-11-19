//规则定义包
const joi = require('joi');

//定义规则明细
const id = joi.number().integer().min(1).required(); //id，规则
const name = joi.string().required(); //name, 规则
const age = joi.number().integer().min(1).max(200).required(); //age,规则


//定义查询规则
exports.query_user_info_schema = {
    body: {
      id,
    },
}

//定义新增规则
exports.add_user_info_schema = {
    body: {
        id,
        name,
        age,
      },
}



