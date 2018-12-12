## 1.组件如何使用

### 1.1创建组件

### 1.2注册组件,在父组件的json文件中注册

~~~
"usingComponents": {
        "movie-item":"/components/movieItem/index"
 }
~~~

### 1.3使用组件

~~~
<movie-item></movie-item>
~~~

### 1.4父组件向子组件传参

> Tip:通过子组件的属性传参,因为只有属性是向父组件暴露的

~~~javascript
<movie-item wx:for="{{movies}}" wx:key="{{index}}" movie="{{item}}"></movie-item>
~~~

### 1.5要在子组件的`properties`属性中注册

~~~
 properties: {
      movie:{
        type:Object
      }
}
~~~

### 1.6在子组件中使用父组件传递过来的数据

~~~
<text>{{movie.title}}</text>
~~~

