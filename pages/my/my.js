// pages/my/my.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    getAddress(){
      wx.navigateTo({
        url: "/pages/address/address"
      })
    },
    getOrder() {
      wx.navigateTo({
        url: "/pages/order/order"
      })
    },
    getCollect(){
      wx.navigateTo({
        url: "/pages/collect/collect"
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 第一次渲染页面时候调用，只调用一次
        // 渲染组件之前执行，
        console.log("onload");

        var _this = this;

        wx.login({
            success(res){
                if(res.code){   

                    // 获取用户信息
                    wx.getUserInfo({
                        success: function ({ userInfo}){
                            console.log(userInfo);
                            _this.setData({ userInfo })
                        }
                    })

                }else{
                    console.log("登陆失败");
                }
            }
        })
    },
    
    bindGetUserInfo(e){
        console.log(e.detail.userInfo)
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // 第一次渲染页面时候调用，只调用一次
        // 渲染组件之后执行
        console.log("onready");
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        // 页面显示都会调用onshow方法，调用多次
        console.log("onshow");
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        // 切换页面隐藏，隐藏调用方法
        console.log("onhide");
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        // 关闭当前组件，移除组件触发方法
        console.log("onunload");
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        console.log("onPullDownRefresh监听用户下拉动作");
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        console.log("onReachBottom页面上拉触底事件的处理函数");
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        console.log("onShareAppMessage用户点击右上角分享");
    }
})