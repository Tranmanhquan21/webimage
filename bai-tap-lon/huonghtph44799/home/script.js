(async ()=>
  {
  const
    interval       = 3000
  , paddingRight   = 50
  , slidesWrapper  = document.querySelector('.carousel-slides')
  , slides         = document.querySelectorAll('.carousel-slides > li')
  , delay          = ms => new Promise(r => setTimeout(r, ms))
  , movLeft = (el, mov) => new Promise(r =>
    {
    el.ontransitionend =_=>
      {
      el.ontransitionend = null
      el.style.transition = 'none';
      r()
      }
    el.style.transition = '0.1s';
    el.style.transform  = `translateX(${-mov}px)`;
    });

  let index = 0;

  while (true)
    {
    await delay( interval )
    await movLeft( slidesWrapper, slides[index].clientWidth + paddingRight  )

    slidesWrapper.appendChild( slides[index] )
    slidesWrapper.style.transform    = `translateX(0)`
    index = ++index % slides.length
    }
  })()
  
var box_list = document.querySelector(".box_list");
var drop_web = document.querySelector(".drop_web")
let button = document.querySelector(".left_drop");
let button1 = document.querySelector(".inner_menu");
button.addEventListener("click",function(){
    event.stopPropagation();
    box_list.classList.toggle('show_dow');
});
button1.addEventListener("click",function(){
    drop_web.classList.toggle('show_anh');
    event.stopPropagation();

})
window.addEventListener("click",function(){
    box_list.classList.remove('show_dow');
    drop_web.classList.remove('show_anh');
});

