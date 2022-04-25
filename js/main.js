const searchEl = document.querySelector('.search');
const searchInputEl =searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  //logic..
  searchInputEl.focus();//인풋요소를 선택하지않고 아이콘검색 눌렀을때focus실행된다.
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});



searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});









// 사이드바

const badgeEl = document.querySelector('header .badges');

const toTopEl =document.querySelector('#to-top'); //스크롤탑
/* 
window.addEventListener('scroll', function(){
  console.log('scroll');
});
*/

window.addEventListener('scroll', _.throttle(function (){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //배지숨기기
    //  gsap.to(요소,지속시간,옵션)
    gsap.to(badgeEl, 0.6, {   //gsap이라는 자바스크립트애니메이션라이브러리 통해서to라는 메소드로 애니메이션동작시킬거임
      opacity: 0,
      display:'none'
    })
    //우측맨아래 화살표버튼숨기기
    gsap.to("#to-top",0.2, {
      x:0

    });
    
  }else{
    //배지보이기
    gsap.to(badgeEl, 0.6, {   //gsap이라는 자바스크립트애니메이션라이브러리 통해서to라는 메소드로 애니메이션동작시킬거임
      opacity: 1,
      display:'block'
    });
    //우측맨아래 화살표버튼숨기기
    gsap.to("#to-top",0.2, {
      x:100

    });

  }
},300));


toTopEl.addEventListener('click', function(){
  gsap.to(window, 0.7,{
    scrollTo:0
  });

});









/*300는 0.3초 */
/*_.throttle(함수, 시간) */



//SECTION
//Visual

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl,index) {
  //  gsap.to(요소,지속시간,옵션)
  gsap.to(fadeEl,1,{
    delay:(index+1)*0.7, //0.7  1.4  2.1  2.7
    opacity:1
  });

});





//slide
//new SWiper(선택자, 옵션)
new Swiper('.notice-line .swiper',{
  direction: 'vertical', //방향수직
  autoplay:true,//자동슬라이드 진행
  loop: true  //반복재생여부

});



//
new Swiper('.promotion .swiper-container',{
  //direction:'horizontal',//방향수평
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,  //반복재생여부
  autoplay:{delay:5000},//자동슬라이드 진행 5초한번씩

  pagination:{el:'.promotion .swiper-pagination',//페이지 번호 요소 선택자
  clickable: true//사용자의 페이지 번호 요소 제어 가능 여부
  },


  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});










//스타벅스 프로모션 아이콘위표시한것
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion//느낌표는 불린의 반대즉  flase라면,,true로
  if(isHidePromotion){
    //숨김처리
    promotionEl.classList.add('hide');
  }else{
    //보임처리
    promotionEl.classList.remove('hide');
  }
});



//랜덤한 숫자를 생성하는 함수 




// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}




//.youtube .inner밑으로

function floatingObject(selector, delay, size ){
  //gsap.to(요소,시간,옵션);
   gsap.to(selector, random(1.5, 2.5), {//selector는 선택자 random 애니메이션동작시간
    //옵션
    // y:20,
    y:size,
    repeat:-1, // -1은   무한반복 의미한다
    ease: Power1.easeInOut,//gsap easing구글서검색후 소스복사
    yoyo:true,  //한번 재생된애니메이션이 아래로갔다가 아래로 내려오는것
    //delay:3  //3초뒤에 애니매이션 실행하겠다.
    delay:random(0,delay)
  });
}
floatingObject('.floating1',1,15);
floatingObject('.floating2',0.5,15);
floatingObject('.floating3',1.5,15);







//동영상강의 다시보자    28.스크롤 위치계산 애니메이션(1)     29.
//scrollMagic

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl){
  new ScrollMagic
      .Scene({
        triggerElement:spyEl, //보여짐 여부를 감시할요소지정
        triggerHook:0.8
      })
      .setClassToggle(spyEl, 'show')
      .addTo(new ScrollMagic.Controller())
});



/*SECTION10 AWARDS  */
new Swiper('.awards .swiper-container', {
  // direction:'horizontal'
  autoplay:true,
  loop:true,
  spaceBetween:30,
  slidesPerView:5,
  navigation:{
    preEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});






//footer 날짜계싼
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()

















