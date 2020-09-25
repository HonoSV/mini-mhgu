// pages/monster/monster.js
const getData = require('../../utils/getData')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    monsterList: [],
    searchText: '',
    cacheData: []
  },
  bindInput: function(e) {
    let val =  e.detail.value
    console.log(val)
    this.setData({searchText: val})
  },
  search: function() {
    getData.getMonster(this, false, this.data.searchText)
  },
  clearSearch: function(e) {
    this.setData({monsterList: this.data.cacheData, searchText: ''})
  },

  checkDetail: function(e) {
    let fleshy = e.currentTarget.dataset.fleshy
    let anti = e.currentTarget.dataset.anti
    let name = e.currentTarget.dataset.name
    wx.navigateTo({
      url: `./monsterDetail/monsterDetail?fleshy=${fleshy}&anti=${anti}&name=${name}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    getData.getMonster(that, true)
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