const app = getApp()
const URL = app.globalData.serverURL
const getSkill = (that, first, val) => {
  if(!val)
    val=''
  wx.request({
    url: URL + '/skill',
    data: {
      name: val
    },
    success(res) {
      that.setData({listData: res.data})
      if(first)
        that.setData({cacheData: res.data})
    }
  })
}

module.exports = {
  getSkill: getSkill
}