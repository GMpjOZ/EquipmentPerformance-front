# EquipmentPerformance-front

##安装Node.js

https://nodejs.org/en/download/  

Windows Installer (.msi)   32-bit/64-bit

####检查一下node和npm版本
```
~> node -v

v4.2.6

~> npm -v

v3.5.3

~> cnpm -v

v4.2.0
```

```
~> npm install -g cnpm --registry=https://registry.npm.taobao.org
```

`npm`很慢的话用上面的命令换源，换源以后要用`cnpm`命令


##配置gulp

全局安装`gulp`和`http-server`
```
~> npm install -g gulp http-server
```

进入项目：
```
~> npm install --save-dev

~> npm install gulp-imagemin gulp-sass gulp-clean-css gulp-uglify gulp-rename gulp-concat gulp-clean tiny-lr browser-sync gulp-livereload gulp-jslint --save-dev

~> gulp

~> gulp watch

~> http-server
```

##安装livereload插件

安装好之后导入项目，点击actions+files,打开 compile sass ... 的按钮

在浏览器工具栏上，Enable LiveReload,图标中间变成黄色就OK了

（其实实时更新的挺慢的，还不如自己F5）
