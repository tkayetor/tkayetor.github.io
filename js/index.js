$(document).ready(function() {

 var toggleAffix = function(affixElement, scrollElement, wrapper) {
  
    var height = affixElement.outerHeight(),
        top = wrapper.offset().top;
    
    if (scrollElement.scrollTop() >= top){
        wrapper.height(height);
        affixElement.addClass("affix");
    }
    else {
        affixElement.removeClass("affix");
        wrapper.height('auto');
    }
      
  };
  

  $('[data-toggle="affix"]').each(function() {
    var ele = $(this),
        wrapper = $('<div></div>');
    
    ele.before(wrapper);
    $(window).on('scroll resize', function() {
        toggleAffix(ele, $(this), wrapper);
    });
    
     init
    toggleAffix(ele, $(window), wrapper);
  });
  
});


function openFirstPanel(){
  $('.accordion > dt:first-child').next().addClass('active').slideDown();
}

(function($) {
    
  var allPanels = $('.accordion > dd').hide();
  
  openFirstPanel();
    
  $('.accordion > dt > a').click(function() {
      $this = $(this);
      $target =  $this.parent().next();
      
    
      if($target.hasClass('active')){
        $target.removeClass('active').slideUp(); 
      }else{
        allPanels.removeClass('active').slideUp();
        $target.addClass('active').slideDown();
      }
      
    return false;
  });

})(jQuery);

$(document).ready(function(){ $('footer').footerReveal({ shadow: false, zIndex: -101 });
                            
});

$(document).ready(function(){
  $('.dropbtn').click(function(){
    $('.myDropdown').slideToggle();
  });
});

$(document).ready(function(){
  $('.fa-bars').click(function(){
    $('.myHamburger').slideToggle();
  });
});