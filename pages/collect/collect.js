// pages/collect/collect.js
// 引入js文件
var Category = require("../../Api/category.js");
var GoodsList = require("../../Api/goodsList.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  carDel(options){
    var index = options.target.dataset.id;
    this.data.collectList.splice(index, 1);
    this.setData({
      collectList: this.data.collectList
    })

    wx.setStorageSync('CollectList', this.data.collectList)

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    // 商品列表接口
    GoodsList.goodsListData(function (res) {
      var data = res.data.result;
      var arr = [];
      data.forEach((item) => {
        arr.push({
          id: item.id,
          goodsName: item.name,
          goodsImage: item.image,
          goodsAddress: "广州",
          goodsPrice: item.price
        })
      })
      _this.setData({
        "likeList": arr
      })
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
    let getcollect = wx.getStorageSync("CollectList");
    this.setData({
      collectList: getcollect
    })
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