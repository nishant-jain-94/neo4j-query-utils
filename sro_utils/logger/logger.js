const bunyan = require('bunyan');
const bformat = require('bunyan-format');
const formatOut = bformat({outputMode: 'short', levelInString: true});

const logger = bunyan.createLogger({
    name: 'neo4j-query-utils',
    stream: formatOut,
    level: 'debug'
});

module.exports = logger;