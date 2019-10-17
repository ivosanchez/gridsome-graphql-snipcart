// This is where project configuration and installed plugin options are located. 
// Learn more: https://gridsome.org/docs/config

require('dotenv').config();

module.exports = {
  plugins: [
    {
      use: '~/src/sources/products',
      options: {
        apiKey: process.env.'keyEcvIccrrA6W0Ex',
        base: process.env.'app88MlLeYWv0M6r4',
      },
    },
  ],
};
