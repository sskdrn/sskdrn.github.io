
var linkText=document.getElementById("linktext")
$("#totop").on("click",function(){
    $('html,body').animate({ scrollTop: 0 }, 'slow');
});

$("#link-email").on("mouseenter",function(){
    linkText.innerText="Email: sakthidharan2000@gmail.com"
});
$("#link-github").on("mouseenter",function(){
    linkText.innerText="GitHub: sskdrn"
});
$("#link-instagram").on("mouseenter",function(){
    linkText.innerText="Instagram: @sskdrn"
});
$("#link-linkedin").on("mouseenter",function(){
    linkText.innerText="LinkedIn: sskdrn"
});
$("#link-twitter").on("mouseenter",function(){
    linkText.innerText="Twitter: @sskdrn"
})
$("#link-email").on("mouseleave",function(){
    linkText.innerText="Click one of the above links!"
});
$("#link-github").on("mouseleave",function(){
    linkText.innerText="Click one of the above links!"
});
$("#link-linkedin").on("mouseleave",function(){
    linkText.innerText="Click one of the above links!"
});
$("#link-twitter").on("mouseleave",function(){
    linkText.innerText="Click one of the above links!"
});
$("#link-instagram").on("mouseleave",function(){
    linkText.innerText="Click one of the above links!"
});