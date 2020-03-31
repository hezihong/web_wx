// pages/category/category.js
// 引入js文件
var Category = require("../../Api/category.js");
var GoodsList = require("../../Api/goodsList.js");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        categoryitem: ["手机", "电脑", "音响", "耳机", "电脑", "音响", "耳机", "电脑", "音响", "耳机", "电脑", "音响", "耳机"],
        conId:0,   //代表默认第一项
        content: [
            "../../image/goods01.jpg",
            "../../image/goods02.jpg",
            "../../image/goods03.jpg",
            "../../image/goods04.jpg",
        ]
    },

    itemclick(event){
        // 获取触发对象中data每个id数据
        var id = event.target.dataset.id;
        this.setData({
            conId:id
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        var _this = this;
        // 分类接口
        Category.categoryData(function (res) {
            _this.setData({
                "categoryitem": res.data.result
            })
        })

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
                "content": arr
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
        // 通过跳转页面指定分类项
        var CategoryId = wx.getStorageSync("CategoryId");
        CategoryId = CategoryId ? CategoryId : 0;
        // wx.getSystemInfo小程序所有信息
        // 获取屏幕高度
        var _this = this;
        wx.getSystemInfo({
            success(res) {
                // this.setData()页面数据同步
                _this.setData({
                    conId: CategoryId,
                    scrollHeigth:res.windowHeight
                })
            }
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