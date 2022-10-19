Page({
  data: {
    show:false,
    treeHoleData:[
      {
        "id":"1",
        "question":"如果在一段感情中 我已经不明白自己想要什么了 这段感情还有意义吗 一个人的时候我最常想的是父母 是自己如何能独自承担自己的日常消费 跟他在一起之后 我不仅仅要想这些 还要因为他……",
        "answer":"not yet"
      },
      {
        "id":"2",
        "question":"朋友在网上遇到的卖家卖假的东西，然后揭穿他是假的了。最后两边闹崩了。那个卖家年纪就跟我和朋友差不多大。年纪轻轻，他是怎么产生这么不好的心眼的？最后我想了一下，觉得他这个年……",
        "answer":"not yet"
      },
      {
        "id":"3",
        "question":"朋友在网上遇到的卖家卖假的东西，然后揭穿他是假的了。最后两边闹崩了。那个卖家年纪就跟我和朋友差不多大。年纪轻轻，他是怎么产生这么不好的心眼的？最后我想了一下，觉得他这个年……",
        "answer":"not yet"
      },
      {
        "id":"4",
        "question":"朋友在网上遇到的卖家卖假的东西，然后揭穿他是假的了。最后两边闹崩了。那个卖家年纪就跟我和朋友差不多大。年纪轻轻，他是怎么产生这么不好的心眼的？最后我想了一下，觉得他这个年……",
        "answer":"not yet"
      },
    ],
  },
  onShareAppMessage() {
    return {};
  },
  onLoad(){
    // initTreeHoleList();
  },

  initTreeHoleList(){
    //query for the treehole list and set data.
  },
  navigateToDetail(event){
    var that = this;
    // console.log(event.currentTarget.dataset.id);
    wx.navigateTo({
      url: `../TreeHoleDetailPage/TreeHoleDetailPage?treeHoleId=${event.currentTarget.dataset.id}`,
      success(){
        console.log("success");
      }
    })
  },
  popSelectionCard(){
    this.setData({
      show:true
    })
  },

  canclePop(){
    this.setData({
      show:false
    })
  }
});