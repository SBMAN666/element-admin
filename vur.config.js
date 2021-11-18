const path = require('path') // 导入node 一个默认模块 解析目录相关

function getPath(src) {
  // __dirname // 当前文件的绝对路径
  return path.join(__dirname, src)
}
// 此处配置????
module.exports = {
  // 配置svg-sprite-loader 解析指定目录
  chainWebpack(config) {
    // config就是webpack默认的配置对象
    // 1. 获取webpack 对svg 的解析loader
    const svgloader = config.module.rule('svg')
    // 2. 禁用loader 对svg 的解析
    svgloader.exclude.add(getPath('src/icons/svg')) // exclude 除了那个目录不处理
    svgloader.end()
    // 3. 配置新的loader 对svg的解析
    // 新增一个名字叫icons的rule规则
    const svgSpriteLoader = config.module.rele('icons')
    // 处理什么类型的文件
    svgSpriteLoader.test(/\.(svg)(\?.*)?$/)
    // loader解析的目录
    svgSpriteLoader.include.add(getPath('src/icons/svg'))
    svgSpriteLoader.end() // 返回上一层

    // 使用loader 解析匹配文件
    svgSpriteLoader
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        SymbolId: 'icon-[name]'
      })
      .end()
  },
  // 配置代理服务器
  devServer: {
    proxy: {
      // 只代理以api开头的网络请求
      '/api': {
        // 代理目的地址
        target: 'https://api.imooc-admin.lgdsunday.club',
        // 是否开启代理
        changeOrigin: true
        // 重写url
        // pathRewrite:{
        //   '^/api':''
        // }
      }
    }
  }
}
