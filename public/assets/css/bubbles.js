function initparticles() {
bubbles();
 }




function bubbles() {
   $.each($(".particletext.bubbles2"), function(){
      var bubblecount = ($(this).width()/50)*2;
      for(var i = 0; i <= bubblecount; i++) {
         var size = ($.rnd(80,160)/10);
         $(this).append('<span class="particle" style="top:' + $.rnd(20,80) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
      }
   });
};




jQuery.rnd = function(m,n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor( Math.random() * (n - m + 1) ) + m;
}

initparticles();