/**
 * @description json schema 校验
 */

const Ajv = require('ajv')
const ajv = new Ajv(
    {
      allErrors: true // 校验并输出所有错误
    }
)

/**
 * @param {Object} schema 校验规则
 * @param {Object} data 校验的数据
 */
function _validate(schema, data = {}) {
  const valid = ajv.validate(schema,data)
  if(!valid) {
    return ajv.errors[0]
  }
}
module.exports = _validate
