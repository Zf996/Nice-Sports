// pages/home/home.js
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
    //   '../../images/lunbo-one.jpg',
    //   '../../images/lunbo-two.jpg',
    //   '../../images/lunbo-three.jpg',
    //   '../../images/lunbo-four.jpg'
    // ],
    imgUrls:[],
    imgUrls2: [
      {img:'../../images/run.png',txt:'跑步赛事'},
      {img:'../../images/basketball.png',txt:'篮球赛事'},
      {img:'../../images/shop.png',txt:'线上商城'},
      {img:'../../images/store.png',txt:'附近门店'}
    ],
    // imgUrlsHotShoes:[
    //   { img: '../../images/haimian.png', shoeName: 'Nike Kyrie 5', shoeSubName:'SpongBob SquarePants',salePrice:'RMB 999/$130',saleTime:'2019-08-10'},
    //   { img: '../../images/paidaxing.png', shoeName: 'Nike Kyrie 5', shoeSubName:' Patrick Star', salePrice: 'RMB999/$130', saleTime: '2019-08-10'},
    //   { img: '../../images/zhangyu.png', shoeName: 'Nike Kyrie 5', shoeSubName:'Squidward Tentacles', salePrice: 'RMB999/$130', saleTime: '2019-08-10'}
    // ],
    imgUrlsHotShoes:[],
    // brandImgUrls:[
    //   { img:'../../images/adidas.jpg'},
    //   { img: '../../images/converse.jpg'},
    //   { img: '../../images/vans.png'}],
    brandImgUrls:[],
    indicatorDots: true, // 是否显示面板指示点
    autoplay: true,      // 是否自动切换
    circular: true,      // 是否采用衔接滑动
    interval: 3000,      // 自动切换时间间隔
    duration: 1000,      // 滑动动画时长
    // active: 0            //当前选中标签的索引
  },
 
  loadAll:function(){
    // 添加记录
    // db.collection("nike_kyrie_5")
    //   .add({
    //     data: {
    //       img: 'cloud://web-test-zf-732iz.7765-web-test-zf-732iz-1300035676/zhangyu.png',
    //        shoeName: 'Nike Kyrie 5', 
    //       shoeSubName: 'Squidward Tentacles', 
    //        salePrice: 'RMB 999/$130', 
    //        saleTime: '2019-08-10'
    //     }

    //   }).then(res=>{
    //     // console.log(res)
    //     }).catch(
    //       err=>{
    //         // console.log(err)
    //       })

// 查询记录---三张图片的
    db.collection("nike_kyrie_5")
    .get().then(res=>{
      
      this.setData({ imgUrlsHotShoes:res.data});
      console.log(this.data.imgUrlsHotShoes);
    }).catch(err=>{
      console.log(err);
    })
    // 查询记录---轮播图的
    db.collection("lunbo")
      .get().then(res => {

        this.setData({ imgUrls: res.data });
        console.log(this.data.imgUrls);
      }).catch(err => {
        console.log(err);
      })
     // 查询记录---潮流资讯的
    db.collection("chaonew")
      .get().then(res => {

        this.setData({ brandImgUrls: res.data });
        console.log(this.data.brandImgUrls);
      }).catch(err => {
        console.log(err);
      })
  },

  jumpDetail:function(event){
    var id = event.target.dataset.id;
    // console.log(id);
    var url = "/pages/details/details?id="+id;
    wx.navigateTo({
      url: url,
    })
  },
  jumpbuy: function () { 
    wx.switchTab({
      url: '/pages/buy/buy',
    })
  },
  // onChange(event) {
  //   console.log(event.detail);
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadAll();
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