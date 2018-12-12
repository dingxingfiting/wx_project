// pages/my/my.js
Page({
  data: {
    imgUrls: [
      '../../images/swiper/01.png',
      '../../images/swiper/02.png',
      '../../images/swiper/03.png',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    userLogo:"/images/swiper/beishang.png"
  },
  chooseImage(){
  wx.chooseImage({
    count: 9,
    sizeType: ['original','compressed'],
    sourceType: ['album','camera'],
    success: (res)=>{
      var logo=res.tempFilePaths[0];
      this.setData({
        userLogo:logo
      })
      console.log(res);
    },
   
  })
  }
})