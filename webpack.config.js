const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js',
      publicPath: '/',
   },
   devServer: {
      inline: true,
      port: 8001,
      historyApiFallback: true
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['@babel/preset-env','@babel/preset-react'],

            }
         },
         {
            test:/\.css$/,
            use:['style-loader','css-loader']
         },
         {
            test:/\.(png|jpeg|gif)$/i,
            use:[{
               loader: 'url-loader',
               options:{
                  limit:8190
               }
            }]
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}