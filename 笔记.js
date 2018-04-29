1：单独打包，开端口，显示react都是没问题的，
问题在于复杂的react上，怎么弄；



文件结构
项目文件夹
	[src]
		app.js
	[dist]

	index.html
	index.js

	package.json 
	webpack.config.js 
	.babelrc  这个可能是关键；


一步步走
1：建立项目文件夹
2：建立基本的src  dist文件夹，以及indexhtml  indexjs  webpackconfigjs 
3：npm init  这个时候webpack-v是没问题的
4：npm install --save-dev webpack  暂时省略
5：在src目录下建立 app.js  写入console.log('hello world');
6：webpack ./src/app.js --output ./dist/app.bundle.js
	成功产生出压缩文件，也没有报错
7：在json里面加入start命令，可以打开端口，却是报错的，也没打印出东西；
8：npm install --save-dev webpack-dev-server  服务依赖从新装上；
	start直接不行，找不到webpack，怪了！！
	回到第四步，还是不行，找不到cli
	npm install webpack-cli 
	能打开端口，却报错，cannot resolve  ./src in
	把indexHTML转到src里面还是不行
	把webconfigjs复制过来也还是不行，报错无法解析babelloader
9：把indexhtml内容复制过来；把babelloader给删掉
	这个时候打包是没有问题的，页面输出也是没问题的；端口打开也可以的；
10：npm install --save react react-dom  安装react依赖包
	npm install --save-dev babel-core babel-preset-react babel-preset-env
	babelrc文件先跳过去；试试看；
	npm install --save-dev babel-loader
	修改indexhtml，conjs ，app.js，建立rootjs、
	再启动，不行，完全不行；
	把babelrc复制过来还是不行；是语法错误，
	还是不行，把处理css的loader去掉，可以打开，还是报错了；
	居然报appjs里面的语法错误，却一点都看不出来；
	把原来的appjs复制过来还是不行；
	在con里面增加输出代码块，还是不行啊；
	要是把s rc前面的 ./去掉，直接就报错无法解析了
	npm install babel-preset-es2015  再补一个试试看
	还是不行，真是奇了怪了；
	babelrc文件根本没有复制对位置，之后可以了，但是找不到压缩的文件；
	改一下引入的名字，完全成功；但是没有在start的时候自动打包；
	又碰到以前的问题，无法把bundlejs直接打包出来；只能手动打包；



git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:jinhuashijie/webpack02.git
git push -u origin master