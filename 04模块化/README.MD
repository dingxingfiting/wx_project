- 封装http
- 上拉刷新
- 路由传参

## 1.模块化

### 1.1第一种方式

~~~javascript
//a.js
var a =10;
function go(){
    console.log("go")
}
export {a,go};
~~~

~~~
//b.js引入
import {a,go} from "../../models/data";
go()
~~~

### 1.2第二种方式

~~~js
//a.js
var a =10;
function go(){
    console.log("go")
}
export default {a,go};
~~~

~~~js
//b.js引入
import data from "../../models/data";
data.go()
~~~

## 2.路由

~~~
//a.js
wx.navigateTo({
        url: '/pages/detail/detail?id='+id
})
~~~

~~~
//跳转页面接受参数
onLoad(options){
  var id = options.id;
}
~~~

