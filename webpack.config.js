const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    index: './src/App.tsx', // configurar nome do arquivo de entrada
  },
  output: {
    clean: true,
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'system', // importante para deixar compatível com systemjs e possa carregar libs dinamicamente
    publicPath: '/', // fix para ultima versao do webpack
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new BundleAnalyzerPlugin({ // analisador do bundle
      analyzerMode: process.env.ANALYZE ? 'server' : "disabled",
    }),
  ],
  devServer: {
    open: true,
    port: 3000,
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: {
      index: '/index.html', // importante para redirect de rota fora do netlify
    },
  },
  externals: { // scripts externos fora do bundle (necessario adicionar outras libs compartilhadas)
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader'],
      },
    ]
  },
}
