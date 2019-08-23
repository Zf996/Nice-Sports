// pages/cart/cart.js
// 创建数据库对象
const db = wx.cloud.database({
  env: "web-test-zf-732iz"
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // imgUrls: [
    //   { img: '../../images/haimian.png', shoeName: 'Nike Kyrie 5', shoeSubName: 'SpongBob SquarePants', salePrice: 'RMB999/$130', saleTime: '2019-08-10' },
    //   { img: '../../images/paidaxing.png', shoeName: 'Nike Kyrie 5', shoeSubName: ' Patrick Star', salePrice: 'RMB999/$130', saleTime: '2019-08-10' },
    //   { img: '../../images/zhangyu.png', shoeName: 'Nike Kyrie 5', shoeSubName: 'Squidward Tentacles', salePrice: 'RMB999/$130', saleTime: '2019-08-10' }
    // ],
    //     imageURL:"../../images/haimian.png"
    list:[],
    lunbo:[],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    price:129900
  },
  pay:function(event){
      var price = event.target.dataset.price;
      // console.log(price);
      var url = "/pages/pay/pay?price="+price;
      wx.navigateTo({
        url: url,
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    // 获取home组件传递过来的参数
    var id = options.id;
    console.log(options.id);
    //  向数据库中查询数据
    db.collection("cart")
      .get()
      .then(res => {
        wx.hideLoading();
        this.setData({ list: res.data })
        console.log(this.data.list);
        for(var i=0,sum=0;i<this.data.list.length;i++){
            sum+=Number(this.data.list[i].salePrice.slice(4,8));
        }
        this.setData({price:sum});
        console.log(this.data.price);
      })
      .catch(err => {

      })


    //  向数据库中查询轮播图里的图片数据
    db.collection("lunbo2")
      .get()
      .then(res => {
        wx.hideLoading();
        this.setData({ lunbo: res.data })
        console.log(this.data.lunbo);
      })
      .catch(err => {

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