// pages/map/map.js
const getData = require("../../utils/getData")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [],
    index: 0,
    picSrc: '',
  },
  bindPickerChange: function(e) {
    let num = e.detail.value
    this.setData({index: e.detail.value, picSrc: this.data.array[num].picName})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let data = wx.getStorageSync('map')
    if (data)
      this.setData({array: data, picSrc: data[0].picName})
    else
      getData.getMap(this)
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