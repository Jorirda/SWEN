// index.js
Page({
  data: {
    style: 'border-radius: 12rpx;',
    swiperList: [
      '/components/images/image1.jpg',
      '/components/images/image2.jpg'
    ],
    ticketList: [1,2,3,4,5

    ]
  },
  onChange(event){
    const { value } = event.detail;
    console.log(value)
    if (value === 'mall') {
      // Navigate to the next page only when 'label_2' is pressed
      wx.redirectTo({
        url: '/pages/page2/index'
      });
    }
  }
})

