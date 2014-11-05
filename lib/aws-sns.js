var AWS = require("aws-sdk");
var config = require("../aws-config");

AWS.config.update(config.credentials);

var sns = new AWS.SNS();

module.exports = function(msg) {
	var params = {
		Message: msg,
		Subject: "Keezer Pour",
		TopicArn: config.topic,
	};

	if(msg.final) {
		sns.publish(params, function(err, data) {
			if(err) {
				console.log("Error sending a message: " + err);
			} else {
				console.log("Sent message response: " + JSON.stringify(data));
			}
		});
	}
};
