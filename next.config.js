

/**
 *@type {import('next').NextConfig}
 */


// const withImages = require("next-images")

const nextConfig = {

 module: {
      rules: [
        {
          test: /\.json$/,
          use: 'json-loader',
        },
      ],
    },
  theme: {
    extend: {
      fontSize:{
        'h1':'26px',
        'h2':'26px',
        'base':'16px'

      },
      backgroundImage: {
      
          
        
        },
        colors: {
        'orange-pink': '#fb8c8a',
      },
    }
  },

  
   assetPrefix: ".",
  output:'export',

 images: {
    loader: 'custom',
    loaderFile: './my-loader.ts',
  },
}
 
module.exports = nextConfig




