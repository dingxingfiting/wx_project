## 1.如何使用地图

[腾讯地图坐标拾取](https://lbs.qq.com/tool/getpoint/)

~~~js
//map.wxml
<map id="map" longitude="{{longitude}}" 
latitude="{{latitude}}"  scale="18" 
markers="{{markers}}"
polyline="{{polyline}}" 
circles="{{circles}}" 
></map>
~~~

~~~js
//map.js
// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     markers: [{
      iconPath: "/images/icon/map.png",
      longitude: 114.504270,
      latitude: 30.552610,
      title:"极客营",
      width: 50,
      height: 50,
      // 给icon文字label
      label:{
        content:"极客营科技有限公司",
        color:"#EE5E7B",
        borderWidth:1,
        borderColor:"#EE5E78",
        borderRadius:5,
        padding:5,
      },
      // 给icon点击之后的label
       callout:{
        content:"极客营科技有限公司",
        color:"#EE5E7B",
        borderWidth:1,
        borderColor:"#EE5E78",
        borderRadius:5,
        padding:5,
      }
    }],
    longitude:114.504270,
    latitude:30.552610,
    polyline: [{
      points: [{
        // 公司的坐标
        longitude:  114.504270,
        latitude: 30.552610
      }, {
        // c9的坐标
        longitude:114.503347,
        latitude: 30.552597
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
     circles:[{
      latitude: 30.552610,
      longitude: 114.504270,
      fillColor:"#8DE25055",
      radius:100
    }],
  }
})
~~~

