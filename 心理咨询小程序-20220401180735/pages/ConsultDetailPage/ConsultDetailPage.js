Page({
  data: {
    consultDetail: {
      consultId: "",
      name: "",
      stuId: "",
      phone: "",
      date: "",
      time: "",
      status: "",
      describe: "" //相较于list，detail页面多了一个描述
    }
  },
  onShareAppMessage() {
    return {};
  },

  onLoad(options) { //接收咨询列表传来的consultid
    console.log(options.consultId);
    this.setData({
      'consultDetail.consultId': options.consultId,
    });
    // queryConsult(options.consultId);
  },
  queryConsult(consultId){
    // 根据consultId去获取完整的consult信息
  }
});