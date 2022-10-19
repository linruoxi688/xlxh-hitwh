Page({
  data: {
    treeHoleDetail: {
      treeHoleId: "",
      question: "",
      answer: ""
    }

  },
  onShareAppMessage() {
    return {};
  },
  onLoad(options) {//接收树洞广场传来的树洞id
    console.log(options.treeHoleId);
    this.setData({
      'treeHoleDetail.treeHoleId':options.treeHoleId,
    });
    // console.log(this.data.treeHoleDetail.treeHoleId);
    // queryTreeHole(options.treeHoleId);
  },
  queryTreeHole(id) {
    //use id to get the question and answer,setData after done
  }
});