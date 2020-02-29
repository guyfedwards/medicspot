const supertest = require('supertest')
const createApp = require('./app')
const db = require('./db')

let app
let database

describe('/locations', () => {
  beforeAll(async () => {
    database = await db.init()
    app = createApp(database)
  })

  it('should return empty array if the query is shorter than 2 characters', async () => {
    const res = await supertest(app)
      .get('/locations?q=s')

    expect(res.body.data.length).toBe(0)
  })

  it('should match full name', async () => {
    const res = await supertest(app)
      .get('/locations?q=phrakhtaes')

    expect(res.body.data.length).not.toBe(0)
    expect(res.body.data).toMatchSnapshot()
  })

  it('should match a partial name', async () => {
    const res = await supertest(app)
      .get('/locations?q=hastin')

    expect(res.body.data.length).not.toBe(0)
    expect(res.body.data).toMatchSnapshot()
  })
})
