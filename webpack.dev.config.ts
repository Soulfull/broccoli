import path from 'path';
import { Configuration, HotModuleReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

const config: Configuration = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
            },
          },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    modules: [path.resolve('src'), 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Broccoli email subscription',
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
    }),
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'build'),
    port: 4000,
    open: true,
    hot: true,
  },
};

export default config;
