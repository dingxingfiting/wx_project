// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data:{
    movies:[]
  },
  onLoad(){
    wx.request({
      url: 'http://t.yushu.im/v2/movie/top250',
      header: {
        'Content-Type': 'application/json'
      },
      success: (res) =>{
        var movies=[];
        var subjects = res.data.subjects;
        for(var i=0;i<subjects.length;i++){
           var imageUrl = subjects[i].images.large;
           var title = subjects[i].title.slice(0,6)+"...";
           var average = subjects[i].rating.average;
           var temp ={
             imageUrl,
             title,
             average
           };
           movies.push(temp);
        }
        this.setData({
          movies
        })
      }
    })
  }
})