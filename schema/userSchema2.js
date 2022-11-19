const e = require('express');
const Joi = require('joi');

/**
 * 定义校验中间件
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const userSchema2 = (req, res, next) => {
    ['body', 'query', 'params'].forEach(key => {
        console.log(req[key])
    })

    const schema = Joi.object({
        id: Joi.number().integer().required(),
        name: Joi.string().required(),
        age: Joi.number().integer().min(1).max(200).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        console.log(error)
        switch (error.details[0].context.key) {
            case 'id':
                res.status(400).send("id不合法");
                break;
            case 'name':
                res.status(400).send("name不合法");
                break;
            case 'age':
                res.status(400).send("age不合法");
                break;
            default:
                res.status(400).send({ error: "校验不通过！" })
        }

    }
    next();

}

module.exports = userSchema2;