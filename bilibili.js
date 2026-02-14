
//页面滚动出现固定页眉
//卡片动画
//修改了函，新增位移
//写了个函数
function cardOut(trapper, card) {
  console.log('cardOut被调用:', trapper, card)
  let timer
  trapper.addEventListener('mouseenter', () => {
    clearTimeout(timer)
    card.classList.add('move')
  })
  trapper.addEventListener('mouseleave', () => {
    timer = setTimeout(() => {
      card.classList.remove('move')
    }, 200);
  })
  card.addEventListener('mouseenter', () => {
    clearTimeout(timer)
    card.classList.add('move')

  })
  card.addEventListener('mouseleave', () => {
    card.classList.remove('move')

  })
}
cardOut(document.querySelector('.tubiao-more1'), document.querySelector('.gamecard'))
cardOut(document.querySelector('.tubiao-more2'), document.querySelector('.mangacard'))
cardOut(document.querySelector('.tubiao-more3'), document.querySelector('.download'))
//
const user = document.querySelector('.user');
const userIcon = document.querySelector('.user-icon');
//单独写一个这个user，这个需要判断鼠标悬停的状态决定move的移除
if (user && userIcon) {
  let timer2

  userIcon.addEventListener('mouseenter', () => {
    clearTimeout(timer2);
    userIcon.classList.add('move');
    user.classList.add('move');
  })

  userIcon.addEventListener('mouseleave', () => {
    timer2 = setTimeout(() => {
      if (!user.matches(':hover')) {
        userIcon.classList.remove('move');
        user.classList.remove('move')
      }
    }, 200)
  })

  user.addEventListener('mouseenter', () => {
    clearTimeout(timer2);
    userIcon.classList.add('move')
    user.classList.add('move')
  })

  user.addEventListener('mouseleave', () => {
    if (!userIcon.matches(':hover')) {
      userIcon.classList.remove('move')
      user.classList.remove('move')
    }
  })
}
cardOut(document.querySelector('.big'), document.querySelector('.vip'))
cardOut(document.querySelector('.messages'), document.querySelector('.mes'))
cardOut(document.querySelector('.newPos'), document.querySelector('.newpos'))
cardOut(document.querySelector('.colector'), document.querySelector('.colect'));
cardOut(document.querySelector('.hist'), document.querySelector('.history'));
cardOut(document.querySelector('.submit'), document.querySelector('.putup'));

//页面滚动出现小组件

const refreshItem = document.querySelector('.fixed-item .refresh-btn')
const more = document.querySelector('.more')
const toTop = document.querySelector('.toTop')
window.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop > 800) {
    refreshItem.style.opacity = '1'
    more.style.opacity = '1'
    toTop.style.opacity = '1'
  }
  else {
    refreshItem.style.opacity = '0'
    more.style.opacity = '0'
    toTop.style.opacity = '0'
  }
})

//滚动至固定顶部
const fixedNav = document.querySelector('.nav')
const biIcon = document.querySelector('.biIcon')
const moveCato = document.querySelector('.nav-cato-left')
const tvIcon = document.querySelector('.tubiao tv')
const searchBox = document.querySelector('.enter-center-search')
const iBox = document.querySelector('.nav-search-input')
window.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop > 64) {
    fixedNav.style.position = 'fixed'
    fixedNav.style.backgroundColor = '#fff'
    biIcon.style.display = 'block'
    moveCato.classList.add('active')
    searchBox.classList.add('active')
    iBox.classList.add('active')


  }
  else {
    fixedNav.style.display = 'absolute'
    fixedNav.style.backgroundColor = 'rgb(252, 248, 248, .5)'
    biIcon.style.display = 'none'
    moveCato.classList.remove('active')
    searchBox.classList.remove('active')
    iBox.classList.remove('active')

  }
})

//继续下滑出现分类栏
const navv = document.querySelector('.navv')
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 275) {
    navv.style.opacity = '1'
    navv.style.visibility = 'visible'
  }
  else {
    navv.style.opacity = '0'
    navv.style.visibility = 'hidden'
  }
})

//艰难的做了拙劣的悬停效果
//我还是不知道怎么解决这个下滑的时候会从下面透出来
//或许可以在上面的部分的底部加一个盒子设置层级来遮挡一下
//晚点再修改
const showBox = document.querySelector('.showBox');
navv.addEventListener('mouseenter', () => {
  navv.style.height = '88px';
  navv.style.overflow = 'visible';
  showBox.style.transform = 'translateY(90px)';
  showBox.style.opacity = '1';
  showBox.style.pointerEvents = 'auto';
})

navv.addEventListener('mouseleave', () => {
  navv.style.overflow = 'hidden';
  navv.style.height = '50px';
  showBox.style.opacity = '0';
  showBox.style.pointerEvents = 'none';
  showBox.style.transform = 'translateY(0px)';
})

//给箭头做个旋转效果
const rotate = document.querySelector('.rotate ')
const arrow = document.querySelector('.rotate svg')
rotate.addEventListener('mouseenter', () => {
  arrow.style.transform = 'rotate(180deg)'
})
rotate.addEventListener('mouseleave', () => {
  arrow.style.transform = 'rotate(0deg)'
})
//很多很多的分类栏。。。我要写吐了怎么这么多诡异的分类和导航
const touch = document.querySelector('.touch')
const moreCato = document.querySelector('.more-cato')
let timerr
touch.addEventListener('mouseenter', () => {
  if (document.documentElement.scrollTop > 64) {
    clearTimeout(timerr)
    moreCato.classList.add('out')
  }
})
touch.addEventListener('mouseleave', () => {
  if (document.documentElement.scrollTop > 64) {
    timerr = setTimeout(() => {
      moreCato.classList.remove('out')
    }, 500)
  }
})
//再单独写一个鼠标移到分类上
let aTime
moreCato.addEventListener('mouseenter', () => {
  if (document.documentElement.scrollTop > 64) {
    clearTimeout(aTime)
    moreCato.classList.add('out')
  }
})
moreCato.addEventListener('mouseleave', () => {
  if (document.documentElement.scrollTop > 64) {
    aTime = setTimeout(() => {
      moreCato.classList.remove('out')
    }, 500)
  }
})