Page({
    data:{
    /* 定义元素显示或隐藏的状态 */
    isShow:true,
    isMusic:false,
    arr:[1,2,3]
    },
    handleClick(){
        this.setData({
          isShow:!this.data.isShow
        })
      },
      onMusic(){
        var audio = wx.getBackgroundAudioManager();
        if(this.data.isMusic){
          audio.pause();
          this.setData({
            isMusic:false
          })
        }else{
          audio.src = "http://music.163.com/song/media/outer/url?id=571338279";
          this.setData({
            isMusic:true
          })
        }
      }
    
})