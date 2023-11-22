const express = require('express');
const server = express();

server.all('/', (req, res) => {
  Data = new Date();
  Hour = Data.getHours();
  Minutes = Data.getMinutes();
  Seconds = Data.getSeconds();
  console.log("Just got a request!" + Hour + ":" + Minutes + ":" + Seconds)
  res.send('Hosting Active')
})
function keepAlive() {
	server.listen(3000, () => {console.log("Server is online!")});
}

module.exports = keepAlive;