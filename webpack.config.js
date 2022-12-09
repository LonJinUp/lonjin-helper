const path = require('path');
module.exports = {
    // 入口
    entry: './src/index.js',
    experiments: {
        outputModule: true,
      },
    // 出口
    output: {
        module: true,
        // 打包文件夹
        publicPath: path.resolve(__dirname, 'dist'),
        // 打包文件
        filename: 'lonjin-helper.js',
        // 设置对外暴露对象的全局名称
        library: 'lonjinHelper',
        // 打包生成通过esm、commonjs、requirejs的语法引入
        libraryTarget: 'umd',
        
    },
}


