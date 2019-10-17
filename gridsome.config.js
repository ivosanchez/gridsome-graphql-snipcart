// This is where project configuration and installed plugin options are located. 
// Learn more: https://gridsome.org/docs/config

require('dotenv').config();

module.exports = {
  plugins: [
    {
      use: '~/src/sources/products',
      options: {
        apiKey: 'keyEcvIccrrA6W0Ex',
        base: 'app88MlLeYWv0M6r4',
      },
    },
  ],
};


// module.exports = {
//   plugins: [
//     {
//       use: '~/src/sources/products',
//       options: {
//         apiKey: '<your API Key here>',
//         base: '<your base' ID here>',
//       },
//     },
//   ],
// };