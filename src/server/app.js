const express = require('express')

function createApp (db) {
  const app = express()

  app.get('/locations', async (req, res) => {
    const { q: queryString } = req.query

    if (queryString.length < 2) {
      res.json({
        data: []
      })
      return
    }

    let rows
    try {
      rows = await db.all(
        'SELECT geonameid,name,latitude,longitude FROM locations WHERE name LIKE ?',
        `%${queryString}%`
      )
    } catch (err) {
      res.json({
        errors: [{
          status: '500',
          title: 'Internal server error',
          detail: process.env.NODE_ENV === 'production'
            ? ''
            : err.stack
        }]
      })
      return
    }

    res.json({
      data: rows
    })
  })

  return app
}

module.exports = createApp
