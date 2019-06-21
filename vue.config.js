const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {

    // 把开发服务器假设在根路径
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

    // 生成文件的目录名称
    outputDir: "dist",

    //用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
    assetsDir: "static",

    // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
    filenameHashing: true,

    // 不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建,map就是为了方便打印错误位置。
    productionSourceMap: false,

    // 设置单页面与多页面
    // 多页面情况下，每个“page”应该有一个对应的 JavaScript 入口文件。其值应该是一个对象，对象的 key 是入口的名字，value 是：
    // 一个指定了 entry, template, filename, title 和 chunks 的对象 (除了 entry 之外都是可选的)；
    // 或一个指定其 entry 的字符串。
    // 具体情况看官网 https://cli.vuejs.org/zh/config/#pages
    // pages: {
    //     index: {
    //         // page 的入口
    //         entry: 'src/main.ts',
    //         // 模板来源
    //         template: 'public/index.html',
    //         // 在 dist/index.html 的输出
    //         filename: 'index.html',
    //         title: 'Vui库',
    //         // 提取出来的通用 chunk 和 vendor chunk。
    //         chunks: ['chunk-vendors', 'chunk-common', 'index']
    //     }
    // },

    //默认情况下，只有以文件结尾的文件*.module.[ext]才会被视为CSS模块。将此设置为true允许您.module放入文件名并将所有*.(css|scss|sass|less|styl(us)?)文件视为CSS模块。
    //extract true在生产中，false在开发中,是否将组件中的CSS提取到独立的CSS文件中（而不是在JavaScript中内联并动态注入,在开发模式下禁用提取CSS，因为它与CSS热重新加载不兼容
    //sourceMap是否为CSS启用源映射。将此设置为true可能会影响构建性能
    //将选项传递给与CSS相关的加载器
    css: {
        modules: false,
        //extract: true, //设为true的话热更新会出问题
        sourceMap: false,
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },
            postcss: {
                // options here will be passed to postcss-loader
            }
        }
    },

    // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    // 具体信息看官网 https://cn.vuejs.org/v2/guide/installation.html#运行时+编译器vs.只包含运行时
    runtimeCompiler: false,

    // 开启eslint
    // 设置为 true 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
    // 设置为 error 时，这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。
    lintOnSave: 'error',

    // 通过设置让浏览器 overlay 同时显示警告和错误 在 devServe 配置项中  ==>  overlay: {warnings: true,errors: true}
    devServer: {
        // 与devServer.quiet启用，那么除了该初始启动信息将被写入到控制台。这也意味着webpack中的错误或警告不可见。
        // quiet: true,
        overlay: {
            warnings: true,
            errors: true
        }
    },

    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: '基于Vue的前端ui库',
        resolve: {
            extensions: ['.js', '.ts', '.tsx', '.json'],
            alias: {
                '@': resolve('src')
            }
        }
    },

    chainWebpack: config => {

        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end();

        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end();

        // set preserveWhitespace
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true
                return options
            })
            .end();

        config
        // https://webpack.js.org/configuration/devtool/#development
            .when(process.env.NODE_ENV === 'development',
                config => config.devtool('cheap-source-map')
            );

        config
            .when(process.env.NODE_ENV !== 'development',
                config => {
                    config
                        .plugin('ScriptExtHtmlWebpackPlugin')
                        .after('html')
                        .use('script-ext-html-webpack-plugin', [{
                            // `runtime` must same as runtimeChunk name. default is `runtime`
                            inline: /runtime\..*\.js$/
                        }])
                        .end();
                    config
                        .optimization.splitChunks({
                        chunks: 'all',
                        cacheGroups: {
                            libs: {
                                name: 'chunk-libs',
                                test: /[\\/]node_modules[\\/]/,
                                priority: 10,
                                chunks: 'initial' // only package third parties that are initially dependent
                            },
                            commons: {
                                name: 'chunk-commons',
                                test: resolve('src/components'), // can customize your rules
                                minChunks: 3, //  minimum common number
                                priority: 5,
                                reuseExistingChunk: true
                            }
                        }
                    });
                    config.optimization.runtimeChunk('single')
                }
            );

        //在单独的进程中，运行打字类型检查器的web pack插件
        config.plugin('fork-ts-checker').tap(([options]) => {
            return [{
                //以下几项都是推荐配置，async false使其可以在 页面上显示
                async: false,
                tslint: true,
                vue: true
            }]
        })
    }
};
