var orm = require('../config/orm.js')

var burger = {
  selectAll: function (cb) {
    orm.all(function (res) {
      console.log(res);
      cb(res);
    })
  },
  insertOne: function (name, cb) {
    orm.insertOne(name, function (res) {
      console.log(res);
      cb(res);
    });
  },
  updateOne: function (id, cb) {
    orm.updateOne(id, function (res) {
      console.log(res);
      cb(res);
    })
  },
  delete: function (id, cb) {
    orm.delete(id, function (res) {
      console.log(res);
      cb(res);
    })
  }
}

module.exports = burger;
