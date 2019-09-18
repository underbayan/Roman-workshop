'use strict'
var path = require('path')
var fs = require('fs')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

var sassImporter = require('./node_modules/node-sass-import-once')
const ManifestPlugin = require('webpack-manifest-plugin')
module.exports = function(env) {
  var devToolConfig
  var isSourceMap
  var plugins = []
  var entry
  var publicPath
  var outputPath
  var externalCdn
  var htmlPlugins = []

  var isProduction = function() {
    return process && process.env.NODE_ENV === 'production'
  }
  var htmlCreator = function(list) {
    var TEM_PATH = path.resolve(__dirname, '../web/public')
    return list.map(function(o) {
      var h = new HtmlWebpackPlugin({
        template: path.resolve(TEM_PATH, o + '.html'),
        filename: o + '.html',
        chunks: [o + ''],
        inject: 'body',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      })
      return h
    })
  }

  //noinspection JSDuplicatedDeclaration
  entry = {
    index: ['babel-polyfill', require.resolve('../web/polyfill/index.js'), './web/index.js']
  }
  htmlPlugins = htmlCreator(['index'])
  var CommonPlugins = [
    // new ExtractTextPlugin("[name].[hash:8] .css"),
    new webpack.IgnorePlugin(/^\.\/lang$/, /^\.\/locale$/, /moment$/),
    new webpack.ProvidePlugin(require('./global').globalPlugin),
    new ManifestPlugin({ fileName: 'asset-manifest.json' }),
    new webpack.LoaderOptionsPlugin({
      options: {
        sassLoader: {
          includePaths: [path.resolve(__dirname, './web')]
        },
        sassConfig: {
          importer: sassImporter
        },
        context: '/'
      }
    }),
    new webpack.BannerPlugin(fs.readFileSync('./LICENSE', 'utf8'))
  ]

  var optimizePlugins = [
    // new CompressionPlugin({
    //   algorithm: 'gzip',
    //   filename: o=>o,
    //   asset: '[path][query]'
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.optimize.MinChunkSizePlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      sourceMap: false,
      bare_returns: true
    }),
    new webpack.optimize.AggressiveMergingPlugin({
      minSizeReduce: 1.5,
      moveToParents: true
    })
  ]

  plugins = plugins.concat(CommonPlugins)
  plugins = plugins.concat(htmlPlugins)

  if (isProduction()) {
    plugins = plugins.concat(optimizePlugins)

    devToolConfig = ''
    isSourceMap = false
    publicPath = './'
    outputPath = '../dist'
  } else {
    devToolConfig = 'source-map'
    isSourceMap = true
    publicPath = './'
    outputPath = '../dist'
    var hotServerReplace = 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
    for (var o in entry) {
      entry[o] = [hotServerReplace].concat(entry[o])
    }
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }
  var config = {
    devtool: devToolConfig,
    entry: entry,
    output: {
      path: path.resolve(__dirname, outputPath),
      filename: '[name]' + (!isSourceMap ? '.[hash:8]' : '') + '.js',
      chunkFilename: 'chunk_[name].[hash:8].js',
      publicPath: publicPath,
      libraryTarget: 'umd',
      library: 'bugatti'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
      modules: ['node_modules', 'web', './'],
      alias: {
        webworkify: 'webworkify-webpack-dropin'
      }
    },
    externals: '',
    plugins: plugins,
    module: {
      noParse: [/.*videojs\.hls\.js/],
      loaders: [
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.(js|jsx)$/,
          enforce: 'pre',
          use: [
            {
              options: {
                baseConfig: require('./lint').lintConfig,
                ignore: false,
                useEslintrc: false
              },
              loader: 'eslint-loader?parser=babel-eslint'
            }
          ],
          include: [/web/]
        },
        {
          test: /\.(js|jsx)$/,
          loader: ['babel-loader?compact=false'],
          include: [/web/]
        },
        {
          test: /\.(ttf|eot|svg|woff|woff2|)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader?name=fonts/[name].[hash:8].[ext]'
        },
        {
          test: /\.(png|jpeg|jpg|tiff|bmp|)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader?name=img/[name].[hash:8].[ext]'
        },
        {
          test: /\.css/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                alias: {},
                includePaths: [],
                sourceMap: isSourceMap,
                modules: false,
                minimize: true
              }
            },
            { loader: 'resolve-url-loader' }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                alias: {},
                includePaths: [],
                sourceMap: isSourceMap,
                minimize: true
              }
            },
            { loader: 'resolve-url-loader' },
            {
              loader: 'sass-loader',
              options: {
                alias: {},
                includePaths: [],
                sourceMap: isSourceMap
              }
            }
          ]
        },
        {
          test: /\.less$/,
          // use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                alias: {},
                includePaths: [],
                sourceMap: isSourceMap,
                minimize: true
              }
            },
            { loader: 'resolve-url-loader' },
            {
              loader: 'less-loader',
              options: {
                alias: {},
                includePaths: [],
                sourceMap: isSourceMap
              }
            }
          ]
        }
      ]
    }
  }
  return config
}
