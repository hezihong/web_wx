// pages/addressedit/addressedit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  setName(e) {
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
  editAddress(){
    // let key = 'addressList['+id+"]"
    if (this.data.name && this.data.tel && this.data.address) {
      let addressList = wx.getStorageSync('addressList');
      let newAddress = {
        id: this.data.id+1,
        name: this.data.name,
        tel: this.data.tel,
        address: this.data.address
      }
      addressList.splice(this.data.id,1,newAddress)
      console.log(addressList)
      wx.setStorageSync("addressList", addressList)

      wx.navigateTo({
        url: '../address/address',
      })

    } else {
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
  onLoad: function ({id}) {
    let addressList = wx.getStorageSync('addressList')

    this.setData({
      name: addressList[id].name,
      tel:addressList[id].tel,
      address: addressList[id].address,
      id:id
    })
    console.log(this.data.id)
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