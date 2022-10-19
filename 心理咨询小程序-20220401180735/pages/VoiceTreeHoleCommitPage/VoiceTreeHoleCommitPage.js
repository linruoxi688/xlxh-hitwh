// pages/VoiceTreeHoleCommitPage/VoiceTreeHoleCommitPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  playRecord(){
    // 获取innerAudioContext实例
    const innerAudioContext = wx.createInnerAudioContext()
    // 是否自动播放
    innerAudioContext.autoplay = true
    // 设置音频文件的路径
    innerAudioContext.src = this.data.tempFilePath;
    // 播放音频文件
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    });
    // 监听音频播放错误事件
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  }
})

  
