var { url } = require("./config.js");
// 模块化思想

// module.exports导入方法对象
module.exports.goodsListData = goodsListData;
module.exports.goodsListIdData = goodsListIdData;

// 请求商品数据，通过id请求
function goodsListIdData(id,callback){
    wx.request({
        url: `${url}goodsList/${id}`,
        header: {
            'content-type': 'application/json' // 默认值
        },
        success(res) {
            callback(res)
        }
    })
}

// 自定义方法，请求api接口
function goodsListData(callback) {

    //   请求分类接口数据
    wx.request({
        url: `${url}goodsList`, //仅为示例，并非真实的接口地址
        header: {
            'content-type': 'application/json' // 默认值
        },
        success(res) {
            callback(res);
        }
    })
}