var tmi = require("tmi.js");

var options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "TestingBotTMI",
        password: "oauth:hu76cq4g0rcht6bnwkyp1pf2me7bvg"
    },
    channels: ["#AkariRen"]
};

// Connect the client to the server..
var client = new tmi.client(options);
client.connect();

client.on('connected', function(address, port) {
  client.action("AkariRen", "Hello I'm a test bot and I'm currently connected to this channel.");
});
