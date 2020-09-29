// pages/synthesis/synthesis.js
const getData = require("../../utils/getData")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [],
    flag: false,
    oneButton: [{text: "确认"}],
    rate: '',
    num: '',
    searchText: '',
  },
  openDialog: function(event) {
    let rateStr = '成功概率： '
    let numStr = '调和数量： '
    rateStr += event.currentTarget.dataset.rate
    numStr += event.currentTarget.dataset.num
    console.log(rateStr + ':' + numStr)
    this.setData({rate: rateStr, num: numStr, flag: true})
  },
  tapDialogButton(e) {
    this.setData({
      flag: false
    })
  },
  search: function() {
    getData.getSynthesis(this, false, this.data.searchText)
  },
  clearSearch: function(e) {
    let data = wx.getStorageSync('synthesis')
    this.setData({listData: data, searchText: ''})
  },
  bindInput: function(e) {
    let val =  e.detail.value
    this.setData({searchText: val})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let data = wx.getStorageSync('synthesis')
    if (data)
      this.setData({listData: data})
    else
      getData.getSynthesis(this, true)
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