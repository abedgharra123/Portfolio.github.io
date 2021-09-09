$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('body,html').animate({
      scrollTop: $(hash).offset().top
      }, 1200, function(){
      window.location.hash = hash;
     });
     } 
    });
});

var width = $(window).width(); 

window.onscroll = function(){
if ((width >= 900)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#middle").css("background-size","150% auto");
    }else{
        $("#middle").css("background-size","100% auto");        
    }
}
};

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1450);

function magnify(imglink){
  $("#img_here").css("background",`url('${imglink}') center center`);
  $("#magnify").css("display","flex");
  $("#magnify").addClass("animated fadeIn");
  setTimeout(function(){
      $("#magnify").removeClass("animated fadeIn");
  },800);
}

function linkedin(){
  window.location.href = "https://www.linkedin.com/in/abedgh/"; 
}


function EndlessDriving(){
  window.location.href = "https://github.com/abedgharra123/Endless-Driving"; 
}



function CoronaOverflow(){
  window.location.href = "https://github.com/abedgharra123/Corona-Overflow";
}

function Cinema(){
  window.location.href = "https://github.com/abedgharra123/Cinema";
}