<!DOCTYPE html>
<html>
<head>
  <title>R.I.N Official</title>
  <link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap-theme.css">
  <link rel="stylesheet" type="text/css" href="four.css">
  <script src="resources/js/jquery-3.1.1.js"></script>
</head>
<body>

  <div class="page-wrap">


  <div class="row">
    <div class="col-sm-4"></div>
    <div class="col-sm-4">
      <div class="logo-rin"><img src="images/logo_web.png"></div>
    </div>
  </div>
  <nav class="navbar navbar-default navbar-static-top">
    <div class="row">
      <div class="col-sm-12">
        <div class="container-fluid"> 
          <ul class="nav nav-tabs nav-justified">
            <li role="presentation"><a id="home" href="#home">Home</a></li>
            <li role="presentation"><a id="services" href="#services">Service</a></li>
            <li role="presentation"><a id="portfolio" href="#portfolio">Portfolio</a></li>
            <li role="presentation"><a id="about" href="#about">About Us</a></li>
            <li role="presentation"><a id="contact" href="#contact">Contact</a></li>
          </ul>
       </div>
      </div>
    </div>
  </nav> 

  <div class="row">
    <div class="col-sm-1"></div>
    <div class="col-sm-10">
      <div class="container-fluid">
        <div class="content-box"> 
          <div class="content-body">
          </div>
        </div>
      </div>
    </div>
  </div>
 


  </div> <!-- closing tag of page wrap -->


  <div class="row">
    <div class="navbar-footer">
      <div class="col-sm-12">
        <div class="container-fluid">
          <div class="">
            <footer>Copyright RINLabs &copy; 2017</footer>
          </div>
        </div>
      </div>
    </div>
  </div>


  <script type="text/javascript">
    $(document).ready(function () {
        var url = window.location;
        $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
        $('ul.nav a').filter(function() {
             return this.href == url;
        }).parent().addClass('active');
    });
  </script> 

  <script type="text/javascript" src="contents.js">
  </script>

</body>
</html>
