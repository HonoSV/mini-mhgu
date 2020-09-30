// pages/competitive/competitive.js
const getData = require("../../utils/getData")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [],
    flag: false,
    oneButton: [{text: "确认"}],
    monsterPic: [],
    reward: [],
  },
  openDialog: function(event) {
    let cid = event.currentTarget.dataset.cid
    let ids = event.currentTarget.dataset.ids
    getData.getCompetitiveReward(this, cid, ids)
  },
  tapDialogButton(e) {
    this.setData({
      flag: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let data = wx.getStorageSync('competitive')
    if(data)
      this.setData({listData: data})
    else
      getData.getCompetitive(this, true)
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