// 引入js文件
var Category = require("../../Api/category.js");
var GoodsList = require("../../Api/goodsList.js");

// pages/cart/cart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        show:false,
        goodsList: [
            // {
            //     id: 1,
            //     carName: "商品名称",
            //     carImage: "../../image/goods01.jpg",
            //     carPrice: "111.00",
            //     carNum: 7
            // },
            // {
            //     id: 2,
            //     carName: "商品名称",
            //     carImage: "../../image/goods01.jpg",
            //     carPrice: "111.00",
            //     carNum: 1
            // },
            // {
            //     id: 3,
            //     carName: "商品名称",
            //     carImage: "../../image/goods01.jpg",
            //     carPrice: "111.00",
            //     carNum: 1
            // }
        ],
        totalPrice:200
    },
    // 减法计算
    carReduce(options){
        // 获取id下标值
        console.log(this.data.goodsList);
        var index = options.target.dataset.id;
        console.log(index);
        var num = this.data.goodsList[index].carNum; //获取商品数量
        // 提前拼接路径
        var key = "goodsList[" + index + "].carNum";

        var obj = {};
        if(num <= 1){
            obj[key] = 1;
        } else {
            num--; //数量减一
            obj[key] = num;
        }

        this.setData(obj);

        // 调用onshow方法
        this.getTotalData();

    },
    // 加法计算
    carAdd(options){
        var index = options.target.dataset.id;
        var num = this.data.goodsList[index].carNum + 1;
        var key = "goodsList["+index+"].carNum";
        var obj = {};
        // 注意：不会影响原本data中其他对象数据
        obj[key] = num;

        

        this.setData(obj);

        // 调用onshow方法
        this.getTotalData();

    },

    // 删除功能
    carDel(options){
        var index = options.target.dataset.id;
        this.data.goodsList.splice(index,1);

        this.setData({
            goodsList:this.data.goodsList
        })
        // console.log(this.data.goodsList);
        // 调用onshow方法
        this.getTotalData();
    },

    // 跳转支付页面
    getPay(){
      if (this.data.goodsList.length == 0 ){
        wx.showModal({
          title: '提示',
          content: '购物车为空',
          cancelText:"取消",
          confirmText:"去逛逛",
          success(res) {
            if (res.confirm) {
              wx.switchTab({
                url: '../index/index',
              })
            }
          }
        })
      }else{
        wx.navigateTo({
          url: '../pay/pay',
        })
      }
        
    },

    //跳转首页
    walk(){
      wx.switchTab({
        url: '../index/index',
      })
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
        
        // 获取缓存数据
        var getCardata = wx.getStorageSync('GoodsCarList');
        this.setData({
            goodsList:getCardata,
        })
        console.log(this.data.goodsList.length)
        // 计算总价格
        this.getTotalData();
    },
    // 计算总价格方法
    getTotalData(){

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
        wx.setStorageSync("GoodsCarList", this.data.goodsList);
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