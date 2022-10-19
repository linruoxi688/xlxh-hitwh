Page({
  data: { },
  onShareAppMessage() {
    return {};
  },

  navigateToTextTreeHole(){
    wx.navigateTo({
      url: '../../pages/TextTreeHolePage/TextTreeHolePage',
    })
  },

  navigateToVoiceTreeHole(){
    wx.navigateTo({
      url: '../../pages/VoiceTreeHolePage/VoiceTreeHolePage',
    })
  }
  
});