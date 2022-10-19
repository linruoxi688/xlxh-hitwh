Page({
  data: {
    recorderManager:"",
    tempFilePath:""
  },
  onShareAppMessage() {
    return {};
  },

  onLoad: function (options) {
    var that = this;
    //获取全局唯一的录音管理器 RecorderManager实例
    that.recorderManager = wx.getRecorderManager()
    that.recorderManager.onStop((res) => {
      that.setData({
        tempFilePath: res.tempFilePath // 文件临时路径
      })
      console.log('获取到文件：' + that.data.tempFilePath)
    })
    this.recorderManager.onError((res) => {
      console.log('录音失败了！')
      //console.log(res)
    })
  },

  startRecord(){
    this.recorderManager.start({
      duration: 60000,
      sampleRate: 16000, //采样率，有效值 8000/16000/44100
      numberOfChannels: 1, //录音通道数，有效值 1/2
      encodeBitRate: 96000, //编码码率
      format: 'mp3', //音频格式，有效值 aac/mp3
      frameSize: 50, //指定帧大小
      audioSource: 'auto' //指定录音的音频输入源，可通过 wx.getAvailableAudioSources() 获取
    })
  },

  stopRecord(){
    this.recorderManager.stop();
    wx.navigateTo({
      url: '../',
    })
  }
});