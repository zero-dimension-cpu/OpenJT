let slider = new Vue({
  el: "#banner",
  data: {
    currentIndex: 0,
    currentSrc: './images/banner1.jpg',
    sliderData: [
      { url: './images/banner1.jpg', },
      { url: './images/banner2.jpeg', },
      { url: './images/banner3.jpg', },
      { url: './images/banner4.jpg', },
    ],

  },
  methods: {
    changeImage: function (index) {
      this.currentSrc = this.sliderData[index].url;
      let lis = document.querySelectorAll('#banner .dot ul li');
      for (let i = 0; i < lis.length; i++) {
        if (i === this.currentIndex) {
          lis[i].classList.add('active');
        } else {
          lis[i].classList.remove('active');
        }
      }
    },
    nextImage: function () {
      this.currentIndex = (this.currentIndex + 1) % this.sliderData.length;
      this.changeImage(this.currentIndex);
    },
    preImage: function () {
      this.currentIndex = (this.currentIndex + 3) % this.sliderData.length;
      this.changeImage(this.currentIndex);
    }
  }
})

