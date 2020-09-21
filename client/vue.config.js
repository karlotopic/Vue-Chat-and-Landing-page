module.exports = {
  lintOnSave: false,
  configureWebpack:{
    optimization: {
      splitChunks: {
        cacheGroups:{
          app:{
          chunks:'all',
          minSize: 10000,
          maxSize: 80000,
          },
          styles:{
            chunks:'all',
            enforce: true,
            minSize: 10000,
            maxSize: 80000,
          }
        }
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}