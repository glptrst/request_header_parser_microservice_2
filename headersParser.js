module.exports = {
    basicInfo: (headers) => {
	return {
	    ipaddress: 'TODO',
	    language: headers['accept-language'].split(',')[0],
	    software: headers['user-agent'].match(/\((.+?)\)/)[1]
	};
    }
};
