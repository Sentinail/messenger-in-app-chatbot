require('dotenv').config();

const ENV = {
    PORT: process.env.PORT || 3000,
    VERIFY_TOKEN: process.env.VERIFY_TOKEN,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
}

module.exports = ENV;