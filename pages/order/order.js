// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0
  },
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    // console.log(e.detail.current)
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  //确认收货
  sureBtn(e){
    let index = e.target.dataset.typeid
    let newList = this.data.OrderList
    // console.log(index)
    // console.log()
    newList[index].type = 3;
    // console.log(newList[index])
    this.setData({
      OrderList:newList
    })
    
    wx.setStorageSync(
      'OrderList', newList
    )
    this.checkType();
  },

  sureBtn2(e){

    let index = e.target.dataset.typeid;
    let orderList = wx.getStorageSync('OrderList')
    let newList = this.data.payedList;
    let orderId = newList[index].orderId
    
    let data = orderList.findIndex((item)=>{
      return item.orderId == orderId
    }) 
    orderList[data].type =3;

    wx.setStorageSync("OrderList",orderList)

    this.checkType()


  },


  //监测顶danzhuangtai
  checkType(){
    let OrderList = wx.getStorageSync('OrderList')
    if(OrderList){
      let payedList = OrderList.filter((item) => {
        return item.type == 2;
      })
      let goodedList = OrderList.filter((item) => {
        return item.type == 3;
      })

      this.setData({
        OrderList:OrderList,
        payedList: payedList,
        goodedList: goodedList
      })
    }
    console.log(this.data.payedList)

  },
  getIndex(){
    wx.switchTab({
      url: '../index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    var getOrderList = wx.getStorageSync('OrderList');
    this.setData({
      OrderList:getOrderList
    })
    console.log(this.data.OrderList)
    this.checkType();
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
    wx.reLaunch({
      url: '../my/my'
    })
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