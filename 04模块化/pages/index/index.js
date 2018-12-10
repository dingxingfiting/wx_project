// pages/index/index.js
import {
  http
} from "../../utils/http";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    total: null
  },
  onLoad() {
    http("top250", this.handleData);
  },
  onReachBottom() {

    var length = this.data.movies.length;
    if (length < this.data.total) {
      wx.showLoading();
      http("top250?start=" + length + "&count=20", this.handleData);
    }
  },
  handleData(res) {
    var movies = [];
    var subjects = res.data.subjects;
    for (var i = 0; i < subjects.length; i++) {
      var imageUrl = subjects[i].images.large;
      var title = subjects[i].title.slice(0, 6) + "...";
      var average = subjects[i].rating.average;
      var id = subjects[i].id
      var temp = {
        imageUrl,
        title,
        average,
        id
      };
      movies.push(temp);
    }
    movies = this.data.movies.concat(movies);
    this.setData({
      movies,
      total: res.data.total
    })
    wx.hideLoading();
  }
})