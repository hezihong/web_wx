// pages/addressadd/addressadd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  setName(e){
    this.setData({
      name: e.detail.value
    })
  },
  setTel(e) {
    this.setData({
      tel: e.detail.value
    })
  },
  setAddress(e) {
    this.setData({
      address: e.detail.value
    })
  },
  addAddress(){
    if (this.data.name && this.data.tel && this.data.address){
      let addressList = wx.getStorageSync('addressList');
      let newAddress = {
        id: addressList.length + 1,
        name: this.data.name,
        tel: this.data.tel,
        address: this.data.address
      }
      addressList.push(newAddress)
      console.log(addressList)
      wx.setStorageSync("addressList", addressList,)

      wx.navigateTo({
        url: '../address/address',
      })

    }else{
      wx.showToast({
        title: '请填写完整',
        icon: 'none',
        duration: 2000
      })
    }
    



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
    console.log('222')
    wx.setStorageSync("addressFlag","true")
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