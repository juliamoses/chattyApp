const express = require('express');
const WebSocket = require('ws')
const SocketServer = WebSocket.Server;
const uuidv4 = require('uuid/v4');


const PORT = 3001;

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });


const randomizeColor = () => {
  const colors = ['#9FFFF5', '#7CFFC4', '#6ABEA7', '#BDFFFD']
  return colors[Math.floor(Math.random() * colors.length)];
}


wss.on('connection', (ws) => {
  ws.color = randomizeColor();


  //for displaying online users
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
    	client.send(JSON.stringify({
    		userCount: wss.clients.size, type: "userOnline"
    	}))
    }
  })


	ws.onmessage = function (event) {
		const parsedData = JSON.parse(event.data)
		parsedData.id = uuidv4();
		if (parsedData.type === "postMessage") {
			parsedData.type = 'incomingMessage'
      parsedData.color = ws.color
			const stringedData = JSON.stringify(parsedData)

			wss.clients.forEach(function each(client) {
				client.readyState === WebSocket.OPEN
	    	client.send(stringedData)
    	})
		} else if (parsedData.type === "postNotification") {
			parsedData.type = "incomingNotification"
			const stringedData = JSON.stringify(parsedData)

			wss.clients.forEach(function each(client) {
				client.readyState === WebSocket.OPEN
	    	client.send(stringedData)
    	})
		}

		
	}


 
  ws.on('close', () => {
  	wss.clients.forEach(client => {
  		if(client.readyState === WebSocket.OPEN) {
  			client.send (JSON.stringify({
    		userCount: wss.clients.size, type: "userOnline"
    	}))
  		}
  	})
  })

});



