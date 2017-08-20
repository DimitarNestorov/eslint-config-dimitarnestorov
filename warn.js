var config = require("./index.js");

for(var i in config.rules){
	var rule = config.rules[i];

	switch(typeof rule){
		case "string":
			config.rules[i] = "warn";
			break;
		case "object":
			rule[0] = "warn";
			break;
	}
}

module.exports = config;