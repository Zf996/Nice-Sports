// pages/buy/buy.js
// 创建数据库对象
const db = wx.cloud.database({
  env: "web-test-zf-732iz"
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    list:[],
    shoeName:"",
    shoeSubName:"",
    salePrice:""
  },
cart:function(event){
  wx.showToast({
    title: '加入购物车成功',
  })
    var id = event.target.dataset.id;
    var img = event.target.dataset.img;
    console.log(id);
    console.log(img);
    // 拿到id后先向数据库buy中查询和此id相符的记录。并存入cart[]中
  db.collection("buy")
    .where({
     _id:id
    })
    .get()
    .then(res => {
    
      this.setData({ shoeName: res.data[0].shoeName });
      this.setData({ shoeSubName: res.data[0].shoeSubName });
      this.setData({ salePrice: res.data[0].salePrice });
      
      
    })
    .catch(err => {

    })
    // 向购物车内的数据库cart添加数据 记录为img 和 shoeName和salePrice 和count
   db.collection("cart")
      .add({
        data: {
          count:1,
          img:img,
          shoeName: this.data.shoeName , 
          shoeSubName:this.data.shoeSubName,
          salePrice: this.data.salePrice, 
        
        }
      }).then(res=>{
        console.log(res)
        }).catch(
          err=>{
            // console.log(err)
      })
},
buy:function(event){
  wx.showToast({
    title:"请先加入购物车再购买..."
  })
// wx.switchTab({
//   url: '/pages/cart/cart',
// })
},
  loadAll:function(){
    wx.showLoading({
      title: '加载中...',
    })
      // 添加记录
    // db.collection("lunbo2")
    //   .add({
    //     data: {
    //        sname:"lunbo6",
    //       img:'cloud://web-test-zf-732iz.7765-web-test-zf-732iz-1300035676/lunbo2_six.jpg',
          // shoeName: 'converse', 
          // shoeSubName: 'All Star', 
          // salePrice: 'RMB 569/$80', 
          // saleTime: '2018-07-29',
          // desc:"Converse 1970s是converse美国元年1970年代的复刻版本，Converse 1970s遵循了元年的设计，造型跟元年一样，1970s区别与普通款式表现在细节上,70s的鞋头与经典款相比不仅更尖而且也增添了些许层次感，70s的鞋底材质偏乳白，略带泛黄，比普通款鞋底较厚，在侧面多了两条车线，更换了更柔软的鞋垫，质感也比普通款更加出色。它不仅继承了匡威一向百搭特色更是让大多数潮人脚下生辉。"
      //   }

      // }).then(res=>{
      //   console.log(res)
      //   }).catch(
      //     err=>{
      //       // console.log(err)
      // })

    //  向数据库中查询数据
    db.collection("buy")
      .where({
        sname: "aj1"
      })
      .get()
      .then(res => {
        wx.hideLoading();
        this.setData({ list: res.data })
        console.log(this.data.list);
      })
      .catch(err => {

      })


  },
  onChange(event) {
    // wx.showToast({
    //   title: `切换到 ${event.detail.index + 1}`,
    //   icon: 'none'
    // });
    if ((event.detail.index + 1) == 1) {
        // 加载提示框
        wx.showLoading({
          title: '加载中...',
        })
      //  向数据库中查询数据
      db.collection("buy")
        .where({
          sname: "aj1"
        })
        .get()
        .then(res => {
          wx.hideLoading();
          this.setData({ list: res.data })
          console.log(this.data.list);
        })
        .catch(err => {

        })
        // 隐藏加载提示框
        wx.hideLoading();
    }
    // =================
    else if ((event.detail.index + 1)==2){
      // 加载提示框
      wx.showLoading({
        title: '加载中...',
      })
      //  向数据库中查询数据
      db.collection("buy")
        .where({
          sname: "aj11"
        })
        .get()
        .then(res => {
          wx.hideLoading();
          this.setData({ list: res.data })
          console.log(this.data.list);
        })
        .catch(err => {

        })
      // 隐藏加载提示框
      wx.hideLoading();
    }
    else if ((event.detail.index + 1) == 3) {
      // 加载提示框
      wx.showLoading({
        title: '加载中...',
      })
      //  向数据库中查询数据
      db.collection("buy")
        .where({
          sname: "Yeezy"
        })
        .get()
        .then(res => {
          wx.hideLoading();
          this.setData({ list: res.data })
          console.log(this.data.list);
        })
        .catch(err => {

        })
      // 隐藏加载提示框
      wx.hideLoading();
    }
    else  if((event.detail.index + 1) == 4) {
      // 加载提示框
      wx.showLoading({
        title: '加载中...',
      })
      //  向数据库中查询数据
      db.collection("buy")
        .where({
          sname: "converse"
        })
        .get()
        .then(res => {
          wx.hideLoading();
          this.setData({ list: res.data })
          console.log(this.data.list);
        })
        .catch(err => {
           
        })
      // 隐藏加载提示框
      wx.hideLoading();
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadAll();
    cart();
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