var target = 'http://www.stuff.co.nz/'
var fs = require('fs')
var request = require('superagent')
var request = require('request')
var request = require('cheerio')

var fileData = fs.readFile('')

fs.readFile(__dirname + '/file', (error, response) => {
	if (error) {
		throw error
	} else {
	console.log("Done", response)
	}
})

request
	.get(target)
	.end( function(err, response) {
		console.log("content")

		//write the response.text
function 

request('http://www.stuff.co.nz/', function (error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log(body)
	}
})

		console.log(response.text)
    // Object.keys(response).forEach( function(key) {
    // 	console.log(key)
    // 	console.log(response[key])
    // 	console.log('----------------------------')

    // })

	})


