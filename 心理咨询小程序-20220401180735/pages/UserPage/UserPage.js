Page({
  data: {},
  onShareAppMessage() {
    return {};
  },

  navigateToMyConsult(){
    wx.navigateTo({
      url: '../ConsultListPage/ConsultListPage',
    })
  },

  navigateToMyTreeHole(){
    wx.navigateTo({
      url: '../MyTreeHolePage/MyTreeHolePage',
    })
  },
});