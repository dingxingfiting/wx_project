// pages/index/index.js
import { MovieModel } from "../../models/MovieModel";
const movieModel = new MovieModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    total: null,
    /* 定义loading显示或隐藏 */
    isShow: false
  },
  onLoad() {

    movieModel.getTop250(res => {
      this.handleData(res);
    })
  },
  onReachBottom() {
    var length = this.data.movies.length;
    if (length < this.data.total) {
      // wx.showLoading();
      this.setData({
        isShow: true
      })
      movieModel.getOnBottom(length, res => {
        this.handleData(res);
      })
    }
  },
  onPullDownRefresh() {
    this.setData({
      movies: []
    })
    movieModel.getTop250(res => {
      this.handleData(res);
    })
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
      total: res.data.total,
      isShow: false
    })
  }
})