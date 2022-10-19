const { createClient } = require('redis')

const { REDIS_CONF } = require('../conf/db')

const client = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
client.on('error', err => {
  console.error('redis error', err)
}).then(r => {
})

/**
 *  redis set
 * @param {string} key 键
 * @param {string} val 值
 * @param {number} timeout 过期时间
 */
function set(key, val, timeout = 60 * 60) {
  if (typeof val === 'object') {
    val = JSON.stringify(val)
  }
  client.set(key, val)
  client.expireTime(timeout)
}

/**
 * redis get
 * @param {string} key
 */
function get(key) {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err)
        return
      }
      if (val === null) {
        resolve(null)
        return
      }
      try {
        resolve(JSON.parse(val))
      } catch (ex){
        resolve(val)
      }
    })
  })
}

module.exports = {
  set,
  get
}
