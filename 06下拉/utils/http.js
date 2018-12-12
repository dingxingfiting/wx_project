var base_url= "http://t.yushu.im/v2/movie/"
function http(url,callback){
    wx.request({
        url: base_url+url,
        header: {
            'Content-Type': 'application/json'
        },
        success: (res)=> {
            callback(res)
        }
    })
}
export {http};