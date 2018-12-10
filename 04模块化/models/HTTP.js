var base_url= "http://t.yushu.im/v2/movie/"
class HTTP{
    request({url,data={},method="GET",success}){
        wx.request({
            url: base_url+url,
            data,
            method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: (res)=>{
                success(res)
            },
          
        })
    }
}
export{HTTP}