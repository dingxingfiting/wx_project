import {http} from "../../utils/http";
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