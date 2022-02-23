const { defineConfig } = require('@vue/cli-service');
const FileManagerPlugin = require('filemanager-webpack-plugin-fixed');

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],

  devServer: {
    proxy: 'http://127.0.0.1:8000',       //xhr only
  },

  outputDir: 'dist',
  publicPath: '/',
  assetsDir: 'static',

  pages: {
    home: {
      template: 'public/index.html',
      entry: 'src/pages/main_home.js',
      filename: 'home.html',
      title: 'VuedjangoPhoto/home.html',
      minify: false,
    },

    post_list: {
      template: 'public/index.html',
      entry: 'src/pages/main_post_list.js',
      filename: 'post_list.html',
      title: 'VuedjangoPhoto/post_list.html',
      minify: false,
    },

    post_detail: {
      template: 'public/index.html',
      entry: 'src/pages/main_post_detail.js',
      filename: 'post_detail.html',
      title: 'VuedjangoPhoto/post_detail.html',
      minify: false,
    },
  },

  configureWebpack: {
    plugins: [
      new FileManagerPlugin({
        onStart: {
          delete: [
            '../back/static/**/',
            '../back/templates/**/',
          ]
        },

        onEnd: {
          copy: [
            { source: 'dist/static', destination: '../back/static/' },
            { source: 'dist/favicon.ico', destination: '../back/static/img' },
            { source: 'dist/home.html', destination: '../back/templates/' },
            { source: 'dist/post*.html', destination: '../back/templates/blog/' }
          ]
        }
      })
    ]
  }
})
