// pages/task/task.js
const getData = require("../../utils/getData")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    levelList: ['村 1★','村 2★','村 3★','村 4★','村 5★','村 6★','村 7★','村 8★','村 9★','村 10★','集 1★','集 2★','集 3★','集 4★','集 5★','集 6★','集 7★','集 G1★','集 G2★','集 G3★','集 G4★','DLC 2★','DLC 3★','DLC 4★','DLC 5★','DLC 6★','DLC 7★','DLC G1★','DLC G2★','DLC G3★','DLC G4★','集 特殊'],
    levelIndex: 0,
    typeList: ['全部','采集','讨伐','狩猎','捕获','连续狩猎','大连续狩猎'],
    typeIndex: 0,
    isKey: false,
    listData: [],
    flag: false,
    oneButton: [{text: "确认"}],
    text: '',
  },

  openDialog: function(event) {
    let map = event.currentTarget.dataset.map
    let time = event.currentTarget.dataset.time
    let gold = event.currentTarget.dataset.gold
    let hrp = event.currentTarget.dataset.hrp
    let target = event.currentTarget.dataset.target
    let starget = event.currentTarget.dataset.starget
    let sgold = event.currentTarget.dataset.sgold
    let shrp = event.currentTarget.dataset.shrp
    map = "地图： " + map + "\n"
    time = "时间： " + time + "分钟\n"
    gold = "金钱: " + gold + "  HRP: " + hrp + "\n"
    target = "目标： " + target + "\n"
    starget = "副任务： " + starget + "\n"
    sgold = "(副)金钱: " + sgold + " HRP: " + shrp + "\n"
    let str = map + time + gold + target + starget + sgold
    this.setData({text: str, flag: true})
  },
  tapDialogButton(e) {
    this.setData({
      flag: false
    })
  },

  bindPickerChange1: function(e) {
    let num = e.detail.value
    this.setData({levelIndex: num})
    let level = this.data.levelList[num]
    let type = this.data.typeList[this.data.typeIndex]
    let isKey = this.data.isKey
    getData.getTask(this, false, isKey, level, type)
  },
  bindPickerChange2: function(e) {
    let num = e.detail.value
    this.setData({typeIndex: num})
    let level = this.data.levelList[this.data.levelIndex]
    let type = this.data.typeList[num]
    let isKey = this.data.isKey
    getData.getTask(this, false, isKey, level, type)
  },
  switchChange: function(e) {
    let flag = e.detail.value
    this.setData({isKey: flag})
    let level = this.data.levelList[this.data.levelIndex]
    let type = this.data.typeList[this.data.typeIndex]
    getData.getTask(this, false, flag, level, type)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let data = wx.getStorageSync('firstTask')
    if (data)
      this.setData({listData: data})
    else
      getData.getTask(this, true, false)
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