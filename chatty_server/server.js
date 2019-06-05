const express = require('express');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid/v4');


const PORT = 3001;

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');

 //  const initialMessage = {
 //  username,
 //  content
	// }
//event.data
	ws.onmessage = function (event) {
		const parsedData = JSON.parse(event.data)
		parsedData.id = uuidv4();
		const stringedData = JSON.stringify(parsedData)

		wss.clients.forEach(function each(client) {
			client.readyState === WebSocket.OPEN
    	client.send(stringedData)
    })
	}


  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});