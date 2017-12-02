module.exports = {
    basicInfo: (headers, connection) => {
	return {
	    ipaddress: connection.remoteAddress,
	    language: headers['accept-language'].split(',')[0],
	    software: headers['user-agent'].match(/\((.+?)\)/)[1]
	};
    }
};
