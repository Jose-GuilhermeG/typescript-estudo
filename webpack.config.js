 const path = require('path');

 module.exports = {
   mode : 'development',
   entry: {
    modulo1 : './modulo1/src/index.ts' ,
    modulo2 : './modulo2/src/index.ts'
   },
   devtool: 'inline-source-map',
   module: {
     rules: [
       {
         test: /\.tsx?$/,
         use: 'ts-loader',
         exclude: /node_modules/,
       },
     ],
   },
   resolve: {
     extensions: [ '.tsx', '.ts', '.js' ],
   },
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist' , 'assets' , 'js'),
   },
 };