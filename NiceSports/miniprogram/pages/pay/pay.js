// pages/pay/pay.js
// 创建数据库实例对象
const db = wx.cloud.database({
  env:"web-test-zf-732iz"
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl:"",
    show:false
  },
  onClose() {
    this.setData({ show: false });
  },
  tan:function(){
    this.setData({ show: true });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // 向数据库lunbo2查询_id为efdeb2615d5f2cba06f75a0b265346d4的图片
      db.collection("lunbo2")
      .where({
        _id: "efdeb2615d5f2cba06f75a0b265346d4"
      })
      .get().then(res=>{
          this.setData({imgurl:res.data[0].img});
          console.log(res.data);
          console.log(this.data.imgurl);
      })
      .catch(err=>{
        console.log(err);
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})