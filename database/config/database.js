const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
	path: path.resolve(__dirname, '.env'),
});

module.exports = {
	development: {
		username: 'root',
		password: 'MDR3wnkN*/',
		database: 'liabel',
		host: '127.0.0.1',
		dialect: 'mysql',
		port: 3307,
	},
	test: {
		username: process.env.CI_DB_USERNAME,
		password: process.env.CI_DB_PASSWORD,
		database: process.env.CI_DB_NAME,
		host: process.env.CI_DB_HOSTNAME,
		dialect: 'mysql',
		port: process.env.CI_DB_PORT,
	},
	production: {
		username: process.env.PROD_DB_USERNAME,
		password: process.env.PROD_DB_PASSWORD,
		database: process.env.PROD_DB_NAME,
		host: process.env.PROD_DB_HOSTNAME,
		dialect: 'mysql',
		port: process.env.PROD_DB_HOSTNAME,
	},
};
