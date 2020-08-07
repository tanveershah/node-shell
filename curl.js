const request = require('request');

function curl(url) {
  request(url, (err, response, body) => {
    if (err) {
      throw err
    } else {
      console.log(body)
    }
  })
}

module.exports = curl;