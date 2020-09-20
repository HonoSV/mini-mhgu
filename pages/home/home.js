// home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    monster: {
      pic: "../static/pic/buttonIcon/monster.png",
      name: "怪物",
      realName: 'monster',
    },
    task: {
      pic: "../static/pic/buttonIcon/task.png",
      name: "任务",
      realName:'task',
    },
    map: {
      pic: "../static/pic/buttonIcon/map.png",
      name: "地图",
      realName: 'map',
    },
    medal: {
      pic: "../static/pic/buttonIcon/medal.png",
      name: "勋章",
      realName:'medal',
    },
    decorations: {
      pic: "../static/pic/buttonIcon/decorations.png",
      name: "饰品",
      realName:'decorations',
    },
    competitive: {
      pic: "../static/pic/buttonIcon/competitive.png",
      name: "斗技",
      realName:'competitive',
    },
    synthesis: {
      pic: "../static/pic/buttonIcon/synthesis.png",
      name: "调和",
      realName: 'synthesis',
    },
    skill: {
      pic: "../static/pic/buttonIcon/skill.png",
      name: "技能",
      realName:'skill',
    },
    about: {
      pic: "../static/pic/buttonIcon/about.png",
      name: "关于",
      realName:'about',
    },
  },

  nextPage: function(event) {
    let realName = event.currentTarget.id
    let str = '/pages/' + realName + '/' +  realName
    wx.navigateTo({
      url: str,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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