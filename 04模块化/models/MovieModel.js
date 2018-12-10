import {HTTP} from "./HTTP"
class MovieModel extends HTTP{
    getTop250(){
        this.request({
            url:"top250",
            success:res=>{
                callback(res);
            }
        })
    }
}
export{MovieModel};