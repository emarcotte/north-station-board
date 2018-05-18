const path = require('path')
const express = require('express')
const request = require('request')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.get('/data', (req, result) => {
	request('http://developer.mbta.com/lib/gtrtfs/Departures.csv')
		.pipe(result)
})

app.listen(3000)
