const db = require('../configs/database').db
const StringNormalize = require('../function/DataFormat').StringNormalize

const User = {
  GetAllUser:  (result) => {
    return db.query('select * from cake', result)
  },
  Register: (body, callback) => {
    if (body.password.length < 8) {
      throw new Error('Password must have 8 letter or more')
    }
    let insertData = {
      User_FullName: StringNormalize(body.User_FullName),
      username: body.username,
      password: body.password,
      User_Email: body.User_Email,
      User_Telephone: body.User_Telephone,
      User_Address: body.User_Address
    }
    // return db.query('INSERT INTO user VALUES(UUID(),?,?,?,?,?,?)', Object.values(body), callback)
  }
}

module.exports = User