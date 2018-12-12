// pages/index/index.js
const common = require('../../common/common.js')
Page({
  data: {
    imgUrls: [
      '../../images/timg.jpg',
      '../../images/timg1.jpg',
      '../../images/timgCXQWIS71.jpg',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  helloMINA() {
    common.sayHello('MINA')
  },
  goodbyeMINA() {
    common.sayGoodbye('MINA')
  }
  
})