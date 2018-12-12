import {http} from "../../utils/http";
import {MovieModel} from "../../models/MovieModel.js";
const movieModel = new MovieModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    http("subject/"+id,this.handleData)
    movieModel.getTop250(res=>{
      console.log(res);
    })
  },
  handleData(res){
    var title= res.data.title;
    var imageUrl = res.data.images.large;
    this.setData({
      title,
      imageUrl
    })
  }
})