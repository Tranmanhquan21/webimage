
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

