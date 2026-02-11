
//页面滚动出现固定页眉
//卡片动画
//修改了函，新增位移
//写了个函数
function cardOut(trapper, card) {
  let timer
  trapper.addEventListener('mouseenter', () => {
    clearTimeout(timer)
    card.classList.add('move')
  })
  trapper.addEventListener('mouseleave', () => {
    timer = setTimeout(() => {
      card.classList.remove('move')
    }, 300);
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
window.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop > 64) {
    fixedNav.style.position = 'fixed'
    fixedNav.style.backgroundColor = '#fff'
  }
  else {
    fixedNav.style.display = 'absolute'
    fixedNav.style.backgroundColor = 'rgb(252, 248, 248, .5)'
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
  // 方法1：直接修改样式（需要为 navv 添加 CSS 过渡）
  navv.style.height = '88px';
  navv.style.overflow = 'visible';
  showBox.style.transform = 'translateY(90px)';
  showBox.style.opacity = '1';
  showBox.style.pointerEvents = 'auto';
});

navv.addEventListener('mouseleave', () => {
  navv.style.overflow = 'hidden';
  navv.style.height = '50px';
  showBox.style.opacity = '0';
  showBox.style.pointerEvents = 'none';
  showBox.style.transform = 'translateY(0px)';
})

//给箭头做个旋转效果
const arrow = document.querySelector('.rotate svg')
arrow.addEventListener('mouseenter', () => {
  arrow.style.transform = 'rotate(180deg)'
})
arrow.addEventListener('mouseleave', () => {
  arrow.style.transform = 'rotate(0deg)'
})