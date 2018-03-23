## 用 Webpack 整合模組化後的javascript code

### 什麼是 Webpack？

Webpack 是一個開源的前端打包工具。Webpack 提供了前端開發缺乏的模組化開發方式，將各種靜態資源視為模組，並從它生成優化過的程式碼，通常都會寫一個 `webpack.config.js` 來管理各個檔案。

Webpack的核心功能如下
* 可同時整合 CommonJS 和 es6 module
* 轉換 JSX, Coffee Script, TypeScript 等
* 分散封裝專案使用的程式碼，使載入頁面時只需載入當頁所需的程式碼以加速載入速度
* 整合樣式表 (css, sass, less 等)
* 處理圖片與字型
* 建置 production-ready 的程式碼 (壓縮)

看下圖大概就知道 Webpack 最重要的功能是哪些了XD

![](http://4.bp.blogspot.com/-f3f-l-gfQzo/Vh_F0OCuTYI/AAAAAAAAEc4/wu17dcGGiCk/s1600/what-is-webpack.png)

Webpack 設定檔符合 `CommonJS` 的規範，因此要用 `const xxx = require('xxx')` 而不是用 `import xxx from 'xxx'`，在export的部分也要用 `module.exports = {}` 而不是 `export default xxx`

```js
    //webpack.config.js
    module.exports = {
        entry: './index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),       
        }
    }
```

Webpack最基本的設定值有以下幾個
1. entry
    * 用來設定 js file 進入點，通常都會命名為 index.js 或者是 main.js
* output
    * 用來設定 bundle 後的檔案要叫什麼名字以及要擺在哪邊，通常都會命名為 bundle.js 而這個 bundle.js 通常都會擺在 dist 的資料夾
* module
    * 用來設定 Webpack 的各種 loaders ，例如最有名的轉譯套件  babel 就是寫在這邊
* plugin
    * 用來設定各種插件，例如 uglifyjs 以及 minifyjs 就是寫在這邊

### Reference

- [如何使用 Webpack 模組整合工具](https://rhadow.github.io/2015/03/23/webpackIntro/)
- [webpack](https://webpack.js.org/) 

---

## 用 Gulp 達到環境任務自動化執行

### 什麼是 Gulp？

Gulp 是基於 Node.js 的任務自動化管理工具，Gulp 使用了 streams ( 流 ) 的概念，一個任務一個任務的依序按照流程做完，相當的容易思考和理解，因此 Gulp 被廣為使用。

在使用 Gulp 之前要先創立一個 `gulpfile.js` 這個是用來讓 Gulp 可以讀取自動化任務的設定檔，而 Gulp 內部有以下幾種設定值
1. task
    * task 就是任務的意思，會在裡面設定各種要執行的任務，例如 bundle-js bundle-css 等等，裡面會包一個 callback 這個 callback 我們可以用 Webpack 來執行模組化整合的動作，在 task 中有一個非常重要的任務叫 default task ，這個 default task 是將我們前面所設定的各種任務做一個包裝，等前面的任務都做完之後會等待我們做的任何動作來讓各個 task 被觸發。
* run
* watch
    * watch 是做監聽的動作，用來監聽我們是否有對任何檔案做過改寫，如果有改寫了再去執行內部的任務，例如當我改寫了某一個 js file 就會去執行 bundle-js 的動作
* src
* dest

由於我們一開始有先用 Webpack 設定過 `src` 以及 `dest` ，因此在設定 Gulp 的時候只需要寫 `task` 以及 `watch` 就可以了，目的就是為了要任務自動化。

### Reference

- [Gulp 學習1 - 安裝與執行- OXXO.STUDIO](http://www.oxxostudio.tw/articles/201503/gulp-install-webserver.html)
- [了不起的任務運行器Gulp基礎教程](http://www.html-js.com/article/1742)
