// Open the websocket
var webSocket = new WebSocket("ws://localhost:8080/Chat-App-With-WebSockets/websocketendpoint");

// Get the HTML elements
var echoText = document.getElementById("echoText");
echoText.value = "";
var message = document.getElementById("message");

// functions to be handled
webSocket.onopen = function(message) {
	wsOpen(message);
};
webSocket.onmessage = function(message) {
	wsGetMessage(message);
};
webSocket.onclose = function(message) {
	wsClose(message);
};
webSocket.onerror = function(message) {
	wsError(message);
};

// Open a websocket
function wsOpen(message) {
	echoText.value += "Connected ... \n";
}

// Send message
function wsSendMessage() {
	webSocket.send(message.value);
	echoText.value += "Message sended to the server : " + message.value + "\n";
	message.value = "";
}

// Close a connection
function wsCloseConnection() {
	webSocket.close();
}

// response
function wsGetMessage(message) {
	echoText.value += "Message received from to the server : " + message.data
			+ "\n";
}

// close
function wsClose(message) {
	echoText.value += "Disconnect ... \n";
}

// handle errors
function wsError(message) {
	echoText.value += "Error ... \n";
}
