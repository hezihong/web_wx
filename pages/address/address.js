// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList:[
      {
        id:1,
        name:'李四',
        tel:'13512341234',
        address:'广东省广州市天河区科学城222号'
        // check:true
      },
      {
        id:2,
        name: '张三',
        tel: '13567841234',
        address: '广东省广州市越秀区科学城231号'
      }
    ],
    defaultId: 1
  },
  //点击添加地址
  addressAdd() {
    // console.log('radio发生change事件，携带value值为：', e.detail.value);
    wx.navigateTo({
      url: '../addressadd/addressadd',
    })
    
  },
  
  onClick(e){
    // console.log(e.currentTarget.dataset.id)

    let data = this.data.addressList.filter((item) => {
      return item.id == e.currentTarget.dataset.id+1
    })
    let checkAdd = data[0]

    let addressFlag = wx.getStorageSync("addressFlag")
    wx.setStorageSync(
      'checkedAdd', checkAdd
    )

    if(addressFlag == "true"){
      wx.switchTab({
        url: '../my/my',
      })({
        url: '../address/address',
      })
      wx.setStorageSync("addressFlag", "false")
    }else{
      wx.navigateBack({
        delta: 1
      })
    }
    
  },

  // 修改界面
  onEdit(e){
    console.log(e.currentTarget.dataset.editid)
    wx.navigateTo({
      url: '../addressedit/addressedit',
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
    let addressList = wx.getStorageSync('addressList');
    if (addressList){
      this.setData({
        addressList: addressList
      })
    }else{
      wx.setStorageSync(
        'addressList', this.data.addressList
      )
    }
    
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