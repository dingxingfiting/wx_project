import {HTTP} from "./HTTP";
class MovieModel extends HTTP{
    getTop250(callback){
        this.request({
            url:"top250",
            success:res=>{
                callback(res);
            }
        })
    }
    getOnBottom(start,callback){
        this.request({
            url:"top250?start="+start+"&count=20",
            success:res=>{
                callback(res);
            }
        })
    }
}

export {MovieModel};