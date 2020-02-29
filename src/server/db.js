const path = require('path')
const sqlite = require('sqlite')

const init = async () => {
  let db
  try {
    db = await sqlite.open(
      path.join(
        process.cwd(),
        'data/db.sl3'
      ))
  } catch (err) {
    if (err) {
      console.error('Error connecting to database\n', err)
      process.exit(1)
    }
  }

  return db
}

module.exports.init = init
