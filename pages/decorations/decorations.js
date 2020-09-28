// pages/decorations/decorations.js
const getData = require("../../utils/getData")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [],
    flag: false,
    oneButton: [{text: "确认"}],
    materialList: '',
    searchText: '',
  },

  openDialog: function(event) {
    let did = event.currentTarget.dataset.did
    getData.getDecorationsMaterial(this, did)
  },
  tapDialogButton(e) {
    this.setData({
      flag: false
    })
  },
  search: function() {
    getData.getDecorations(this, false, this.data.searchText)
  },
  clearSearch: function(e) {
    let data = wx.getStorageSync('decorations')
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
    let data = wx.getStorageSync('decorations')
    if (data)
      this.setData({listData: data})
    else
      getData.getDecorations(this, true)
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