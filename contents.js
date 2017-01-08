var homePage = "home.html";
var servicePage = "service.html";
var portfPage = "portfolio.html";
var aboutPage = "about.html";
var contactPage = "contact.html";


var url = window.location;
$('ul.nav a[href="'+ url +'"]').parent().addClass('active');
$('ul.nav a').filter(function() {
  return this.href == url;
}).parent().addClass('active');


$.ajax({
   cache: false
});

/* if($(".content-body").width() > $(".content-box").width()){
    $(".content-body").css("overflow", "scroll");
  } else {
    $(".content-box").css("overflow", "hidden");
} */

// Default Value for Home
$(".content-box").html(function(){
  $(".content-body").load(homePage);
});

// Home Content
$("#home").on('click', function(){
  responClicked(homePage);
});

// Services Content
$("#services").on('click', function(){
  responClicked(servicePage);
}); 

// Portfolio Content
$("#portfolio").on('click', function(){
  responClicked(portfPage);
});

$("#about").on('click', function(){
  responClicked(aboutPage);
});

// Contacts Content
$("#contact").on('click', function(){
  responClicked(contactPage);
});

function responClicked(responPage){
  $(".content-box").html(function(){
    $(".content-body").load(responPage);
  });
}

 

 
