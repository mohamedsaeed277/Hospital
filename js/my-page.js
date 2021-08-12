window.onload = (function(){
    $("body").css("overflow","auto");
    $(".loading .sk-fading-circle").fadeOut(1000, function(){
        $(".loading").fadeOut(1000,function(){
            $(this).remove();
        })
    });
});
/* sign up and login */
const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const contain = document.querySelector('.contain');

sign_up_btn.addEventListener('click', () =>{
    contain.classList.add('sign-up-mode');
});
sign_in_btn.addEventListener('click', () =>{
    contain.classList.remove('sign-up-mode');
});
function clickDiv(id) {
    document.querySelector(id).click();
 };