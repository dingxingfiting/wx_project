// pages/list/list.js
//list.js通过getApp()方法调用
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: "hello world"
  },
  // js交互逻辑
  handleClick() {
    this.setData({ msg: "change" })
  } ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(Object) {
    console.log(Object),
    // 取得app.js的全局变量
    console.log(app.globalData.g_data);

  },

})