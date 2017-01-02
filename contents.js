  $.ajax({
    cache: false
  })
  .done(function( html ) {
    $( "#results" ).append( html );
  });

  // Default Value for Home
  $(".content-box").html(function(){
    $(".content-body").load("home.html");
  });

  // Home Content
  $("#home").on('click', function(){
    $(".content-box").html(function(){
      $(".content-body").load("home.html");
    });
  });

  // Services Content
  $("#services").on('click', function(){
    $(".content-box").html(function(){
      $(".content-body").load("service.html");
    });
  }); 

  // Portfolio Content
  $("#portfolio").on('click', function(){
    $(".content-box").html(function(){
      $(".content-body").load("portfolio.html");
    });
  }); 

  // About Content
  $("#about").on('click', function(){
    $(".content-box").html(function(){
      $(".content-body").load("about.html");
    });
  }); 

  // Contacts Content
  $("#contact").on('click', function(){
    $(".content-box").html(function(){
      $(".content-body").load("contact.html");
    });
  }); 

