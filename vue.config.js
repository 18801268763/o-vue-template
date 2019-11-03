module.exports = {
  publicPath: './',
  // lintOnSave: process.env.NODE_ENV !== 'production',
  lintOnSave:false,
  assetsDir: './dist',
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  // devServer: {
  //     open: true, //是否自动弹出浏览器页面
  //     host: "192.168.1.102", 
  //     port: '10001',
  //     https: false,
  //     hotOnly: false,
  //     proxy: {
  //         '/api': {
  //             target: 'http://192.168.1.106:8767/api', //API服务器的地址
  //             changeOrigin: true,
  //             pathRewrite: {
  //                 '^/api': ''
  //             }
  //         }
  //     },
  // }

  // 暂时关闭eslint
  // devServer: {
  //   overlay: {
  //     warnings: false,
  //     errors: false
  //   },
  //   lintOnSave: false
  // }
}