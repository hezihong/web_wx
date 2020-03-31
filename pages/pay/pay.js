// pages/pay/pay.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    // 跳转地址页
  getAddress() {
    wx.navigateTo({
      url: "/pages/address/address"
    })
  },

  //点击支付跳转订单页
  onPay(){
    if (this.data.addressList.address == '请选择'){
      wx.showToast({
        title: '地址不能为空',
        icon: 'loading',
        duration: 1000
      })
    }else{
      let getOrderList = wx.getStorageSync("OrderList");
      let order = {
        orderId: new Date().getTime(), //1584064700947验证
        address: this.data.addressList.address,
        goodsList: this.data.goodsList,
        type: 2 //已支付
      }
      // getOrderList.push(order)
      if (getOrderList){
        getOrderList.push(order);
        wx.setStorageSync("OrderList", getOrderList);
      }else{
        wx.setStorageSync(
          'OrderList', [order]
        )
      }
      wx.navigateTo({
        url: '../order/order',
      })
      wx.removeStorageSync(
        'GoodsCarList'
      )

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
        // 获取缓存数据
        var getCardata = wx.getStorageSync('GoodsCarList');

        var getAddress = wx.getStorageSync('checkedAdd');
        let addressList = null;
        if (getAddress){
          addressList = getAddress
        }else{
          addressList = {
            name:'请选择地址',
            address:'请选择'
          }
        }

        this.setData({
            goodsList: getCardata,
            addressList: addressList
        })
        // 计算总价格
        this.getTotalData();
    },
    // 计算总价格方法
    getTotalData() {

        // 计算总价格
        var totalData = 0;
        for (var i = 0; i < this.data.goodsList.length; i++) {
            totalData = totalData + this.data.goodsList[i].carPrice * this.data.goodsList[i].carNum;
        }

        this.setData({
            totalPrice: totalData
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