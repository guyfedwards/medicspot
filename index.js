const createApp = require('./src/server/app')
const db = require('./src/server/db')

const PORT = process.env.PORT || 8080;

(async () => {
  const database = await db.init()

  console.log('Connected to database')

  const app = createApp(database)

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
})()
