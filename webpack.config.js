const path = require('path')
const webpack = require('webpack')

module.exports = {
  name: 'NumberBaseball-setting',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry:{
    app:['./client']
  },

  module:{
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 10% in KR']
            },
            debug: true
          }],
          '@babel/preset-react'
        ],
        plugins: [ '@babel/plugin-proposal-class-properties' ]
      }
    }]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true })
  ],

  output:{
    filename: 'app.js'
  }
}