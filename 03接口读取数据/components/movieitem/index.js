// components/movieItem/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      movie:{
        type:Object
      }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleDetail(){
      console.log(this.properties.movie.id)
    }

  }

})
