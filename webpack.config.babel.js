import path from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'

export default {
  devtool: 'eval',
  entry: {
    main: path.join(__dirname, 'src', 'index.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.join(__dirname, 'src'),
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'React',
      template: path.join(__dirname, 'src', 'index.ejs'),
    })
  ]
}
