Page({
  data: {
    consultMsg:{
      stuId:"",
      name:"",
      phone:"",
      date:"点击选择",
      time:"点击选择",
      describe:""
    }
  },
  onShareAppMessage() {
    return {};
  },

  bindDateChange(event){
    this.setData({
      'consultMsg.date':event.detail.value
    })
  },

  bindTimeChange(event){
    this.setData({
      'consultMsg.time':event.detail.value
    })
  },

  formSubmit(event){
    var temp = event.detail.value;
    console.log(temp.time);
    this.setData({
      'treeHoleMsg':event.detail.value
    })
    //write the code of submit,get the response to show whether it succeeds.
  }

});