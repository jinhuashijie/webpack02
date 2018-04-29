1：webpack跑了很多坑
大致分为几个大块的功能
打包js文件成bundlejs    启动服务器    显示出react界面
里面最主要的就是个babelrc文件，这个文件没有是个非常大的问题，
很多坑都是由这个文件挖出来的
webpack版本的问题导致对es的解析也会出问题
react里新版本已经废弃createClass，版本不兼容也会常常报错。