const app = getApp()
const URL = app.globalData.serverURL
const picSuffix = app.globalData.picSuffix

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

const getMapName = (that) => {
  wx.request({
    url: URL + '/mapName',
    success(res) {
      that.setData({array: res.data})
      getMapPic(that)
    }
  })
}

const getMapPic = (that) => {
  wx.request({
    url: URL + '/picName',
    data: {
      name: that.data.array[that.data.index]
    },
    success(res) {
      that.setData({picSrc: URL+'/'+res.data})
    }
  })
}

const getMonster = (that, first, monsterName) => {
  if(!monsterName)
    monsterName=''
  wx.request({
    url: URL + '/monster',
    data: {
      name: monsterName
    },
    success(res) {
      res.data.forEach((val, index, arr) => {
         val.icon = URL + '/' + val.icon +  picSuffix
         val.fleshy =  URL + '/' + val.fleshy +  picSuffix
         val.anti =  URL + '/' + val.anti +  picSuffix
      })
      that.setData({monsterList: res.data})
      if(first)
        that.setData({cacheData: res.data})
    }
  })
}

const getDecorations = (that, first, val) => {
  if(!val)
    val=''
  wx.request({
    url: URL + '/decorations',
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
  getSkill: getSkill,
  getMapName: getMapName,
  getMapPic: getMapPic,
  getMonster: getMonster,
  getDecorations: getDecorations,
}