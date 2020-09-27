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
    skillText: '',
    cacheData: [],
    searchText: '',
  },

  openDialog: function(event) {
    let str = event.currentTarget.dataset.did
    this.setData({flag: true, skillText: str})
  },
  tapDialogButton(e) {
    this.setData({
      flag: false
    })
  },
  search: function() {
    getData.getSkill(this, false, this.data.searchText)
  },
  clearSearch: function(e) {
    this.setData({listData: this.data.cacheData, searchText: ''})
  },
  bindInput: function(e) {
    let val =  e.detail.value
    console.log(val)
    this.setData({searchText: val})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    getData.getDecorations(that, true)
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