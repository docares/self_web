window.addEventListener('load',function() {
    let criticalDistance = window.innerHeight - 200
    let min_box = document.querySelectorAll('.min_box')
    let banner = document.querySelector('.right_sideBar')
    //滑动卡片效果
    window.addEventListener('resize',function () {
        criticalDistance = window.innerHeight - 200
        dynamicShow()
    })
    window.addEventListener('scroll', function () {
        dynamicShow()
    })
    //滑动卡片的封装函数
    function dynamicShow() {
        for (let i = 0; i < min_box.length; i++) {
          const box = min_box[i];
          if (box.getBoundingClientRect().top < criticalDistance) {
            box.classList.add('show')
          } else {
            box.classList.remove('show')
          }
        }
      }
      
    

})