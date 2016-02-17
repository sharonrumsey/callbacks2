var target = 'http://www.stuff.co.nz/'
var fs = require('fs')
var request = require('superagent')
var request = require('request')
var request = require('cheerio')
	$ = cheerio.load('<html><head><title></title></head><body></body></html>')
$.html()

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
})
		//write the response.text


// request('www.stuff.co.nz', function (error, response, body) {
// 	if (!error && response.statusCode == 200) {
// 		console.log(body)
// 	})
// }

		console.log(response.text)
    // Object.keys(response).forEach( function(key) {
    // 	console.log(key)
    // 	console.log(response[key])
    // 	console.log('----------------------------')

    // })

	})


