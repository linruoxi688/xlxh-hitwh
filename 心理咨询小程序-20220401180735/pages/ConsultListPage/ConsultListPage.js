Page({
  data: { consultList: [
    {
    consultId:"1",
    name:"张三璃",
    stuId:"2191110000",
    phone:"18888888888",
    date:"2022-03-31",
    time:"15:00",
    status:"待处理" 
  },
  {
    consultId:"2",
    name:"张三",
    stuId:"2191110000",
    phone:"18888888888",
    date:"2022-03-31",
    time:"15:00",
    status:"待处理" 
  },
  {
    consultId:"3",
    name:"张三",
    stuId:"2191110000",
    phone:"18888888888",
    date:"2022-03-31",
    time:"15:00",
    status:"待处理" 
  },
  
] },
  onShareAppMessage() {
    return {};
  },

  navigateToConsultDetail(event){
    wx.navigateTo({
      url: `../ConsultDetailPage/ConsultDetailPage?consultId=${event.currentTarget.dataset.id}`,
      success(){
        console.log("success");
      }
    })
  },

  onLoad(){
    // here wirtes the code to query for personal consult histoty
  }
});