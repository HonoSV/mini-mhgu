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
        wx.setStorageSync('skill', res.data)
    }
  })
}

const getMap = (that) => {
  wx.request({
    url: URL + '/gameMap',
    success(res) {
      res.data.forEach((val,index,array) => {
        val.picName = URL+'/'+val.picName
      })
      that.setData({array: res.data, picSrc: res.data[0].picName})
      wx.setStorageSync('map', res.data)
    }
  })
}

// const getMapName = (that) => {
//   wx.request({
//     url: URL + '/mapName',
//     success(res) {
//       that.setData({array: res.data})
//       getMapPic(that)
//     }
//   })
// }

// const getMapPic = (that) => {
//   wx.request({
//     url: URL + '/picName',
//     data: {
//       name: that.data.array[that.data.index]
//     },
//     success(res) {
//       that.setData({picSrc: URL+'/'+res.data})
//     }
//   })
// }

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
        wx.setStorageSync('monster', res.data)
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
        wx.setStorageSync('decorations', res.data)
    }
  })
}

const getDecorationsMaterial = (that, val) => {
  wx.request({
    url: URL + '/decorationsMaterial',
    data: {
      id: val
    },
    success(res) {
      let list = []
      for (let i of res.data) {
        let str = i.material + " : " + i.num 
        list.push(str)
      }
      that.setData({materialList: list, flag: true})
    }
  })
}

const getSkillAbout = (that, val) => {
  wx.request({
    url: URL + '/aboutDecorations',
    data: {
      name: val
    },
    success(res) {
      let list = []
      for (let x of res.data) {
        list.push(x.decorationsName)
      }
      that.setData({aboutList: list, flag: true})
    }
  })
}

const getSynthesis = (that, first, val) => {
  if(!val)
    val = ''
  wx.request({
    url: URL + '/synthesis',
    data: {
      name: val,
    },
    success(res) {
      that.setData({listData: res.data})
      if(first)
        wx.setStorageSync('synthesis', res.data)
    }
  })
}

const getCompetitive = (that, first) => {
  wx.request({
    url: URL + '/competitive',
    success(res) {
      that.setData({listData: res.data})
      if(first)
        wx.setStorageSync('competitive', res.data)
    }
  })
}

const getCompetitiveReward = (that, cid, mids) => {
  wx.request({
    url: URL+'/competitiveReward',
    data: {
      id: cid,
      ids: mids,
    },
    success(res) {
      let pic = []
      let rwd = []
      res.data.monsterPic.forEach((val, index, arr) => {
        let picStr = URL + "/" + val.icon + picSuffix
        pic.push(picStr)
      })
      res.data.rewards.forEach((val, index, arr) => {
        let rwdStr = val.reward + " " + val.num + "个" + " " + val.rate
        rwd.push(rwdStr)
      })
      that.setData({monsterPic: pic, reward: rwd, flag: true})
    }
  })
}

module.exports = {
  getSkill: getSkill,
  getMap: getMap,
  getMonster: getMonster,
  getDecorations: getDecorations,
  getDecorationsMaterial: getDecorationsMaterial,
  getSynthesis: getSynthesis,
  getSkillAbout: getSkillAbout,
  getCompetitive: getCompetitive,
  getCompetitiveReward: getCompetitiveReward,
}