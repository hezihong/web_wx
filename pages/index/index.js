// 引入js文件
var Category = require("../../Api/category.js");
var GoodsList = require("../../Api/goodsList.js");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        indicatorDots: true,
        interval: 3000,
        duration: 300,
        imgs: [
            "../../image/swiper1.jpg",
            "../../image/swiper2.jpg",
            "../../image/swiper3.jpg",
        ],
        iconArray: [
              {
                  iconUrl: "../../image/icon-fujin.png",
                  iconText: "签到"
              },
              {
                  iconUrl: "../../image/icon-fujin.png",
                  iconText: "签到"
              },
              {
                  iconUrl: "../../image/icon-fujin.png",
                  iconText: "签到"
              },
              {
                  iconUrl: "../../image/icon-fujin.png",
                  iconText: "签到"
              },
              {
                  iconUrl: "../../image/icon-fujin.png",
                  iconText: "签到"
              },
              {
                  iconUrl: "../../image/icon-fujin.png",
                  iconText: "签到"
              },
              {
                  iconUrl: "../../image/icon-fujin.png",
                  iconText: "签到"
              },
              {
                  iconUrl: "../../image/icon-fujin.png",
                  iconText: "签到8"
              },
        ],
        goodsList: [
              {
                  id: 1,
                  goodsName: "商品名称",
                  goodsImage: "../../image/goods01.jpg",
                  goodsAddress: "广州",
                  goodsPrice: "111.00"
              },
              {
                  id: 1,
                  goodsName: "商品名称",
                  goodsImage: "../../image/goods01.jpg",
                  goodsAddress: "广州",
                  goodsPrice: "111.00"
              },
              {
                  id: 1,
                  goodsName: "商品名称",
                  goodsImage: "../../image/goods01.jpg",
                  goodsAddress: "广州",
                  goodsPrice: "111.00"
              },
              {
                  id: 1,
                  goodsName: "商品名称",
                  goodsImage: "../../image/goods01.jpg",
                  goodsAddress: "广州",
                  goodsPrice: "111.00"
              }
        ]
    },
    // 分类页面跳转
    getCategory(options) {
        var id = options.target.dataset.id;//获取id
        wx.setStorageSync("CategoryId", id);

        wx.switchTab({
            url: "/pages/category/category"
        })

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var _this = this;
        // 分类接口
        Category.categoryData(function(res){
            _this.setData({
                "iconArray": res.data.result
            })
        })

        // 商品列表接口
        GoodsList.goodsListData(function(res){
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
                "goodsList": arr
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