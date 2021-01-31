// for Google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-60188990-1', 'auto');
  ga('send', 'pageview');


        $(function(){
          $(".typer").typed({
            strings: ["My name is Angie Nguyen and I like to code."],
            typeSpeed: 30,
          //loop: true,
          //backDelay: 5000,
          showCursor:false
        });
        });
      

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
    $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top'
  });



  $(".random-color").hover(function(e)
  {
    var randomClass = getRandomClass();
              //console.log(e.target);
              $(e.target).closest('.random-color').attr("class", "page-scroll random-color " + randomClass);
            }, 
            function(e) {

            }
            );


          // Closes the Responsive Menu on Menu Item Click
          $('.navbar-collapse ul li a').click(function() {
            $('.navbar-toggle:visible').click();
          });

          function getRandomClass()
          {
          //Store available css classes
          var classes = new Array("pink","green", "purple", "teal", "gold");
          
          //Give a random number from 0 to 3
          var randomNumber = Math.floor(Math.random()*5);
          return classes[randomNumber];
        }