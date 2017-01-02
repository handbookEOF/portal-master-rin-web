var homePage = "home.html";
var servicePage = "service.html";
var portfPage = "portfolio.html";
var aboutPage = "about.html";
var contactPage = "contact.html";


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
  $(".content-box").html(function(){
    $(".content-body").load(homePage);
  });
});

// Services Content
$("#services").on('click', function(){
  $(".content-box").html(function(){
    $(".content-body").load(servicePage);
  });
}); 

// Portfolio Content
$("#portfolio").on('click', function(){
  $(".content-box").html(function(){
    $(".content-body").load(portfPage);
  });
});

// About Content
$("#about").on('click', function(){
  $(".content-box").html(function(){
    $(".content-body").load(aboutPage);
  });
}); 

// Contacts Content
$("#contact").on('click', function(){
  $(".content-box").html(function(){
    $(".content-body").load(contactPage);
  });
}); 

