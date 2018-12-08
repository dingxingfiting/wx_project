Page({
  data: {
    msg: ""
  },
  onLoad() {
    wx.showLoading({
      title: "正在加载数据"
    });
    var url = 'http://mock.eolinker.com/W7AZzAQe1911deea5ab4b01704bbfe0b97948d26eb2d31d?uri=/classic/latest';

    wx.request({
      url,
      header: {
        'Content-Type': 'application/json'
      },
      success: (res) => {
        console.log(res.data);
        this.setData({
          msg: res.data.title
        })
        wx.hideLoading();
      }
    })
  }
})