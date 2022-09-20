window.addEventListener('load',function() {
    let criticalDistance = window.innerHeight - 200
    let min_box = document.querySelectorAll('.min_box')
    let banner = document.querySelector('.right_sideBar')
    let flexTop = banner.offsetTop
    console.log(flexTop);
    //滑动卡片效果
    window.addEventListener('resize',function () {
        criticalDistance = window.innerHeight - 200
        dynamicShow()
    })
    window.addEventListener('scroll', function () {
        dynamicShow()
        User_flex()
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
      
    //用户栏跟随滚轮固定的封装函数
    function User_flex() {
      // let flexTop = banner.offsetTop
      if(window.pageYOffset >= flexTop) {
        // 修改定位为fixed定位
        banner.style.position = 'fixed'
        banner.style.top = 0 + 'px'
      } else {
        banner.style.position = 'absolute'
        banner.style.top = flexTop + 'px'
      }
    }

})