// Utils for selection
var _ = function(e) {  return document.querySelector(e); }
var __ = function(e) { return document.querySelectorAll(e); }

var l1    = _('#liquid_1'),
    f2    = _('#foam_2'),
    bs    = _('#bubbles'),
    texts = __('#text g');


var liquid = function() {
  var tl = new TimelineMax();
  
  for (var i = 2; i <= 10; i++) {
    tl.to(l1, .1, {
      morphSVG: {
        shape: "#liquid_" + i
      }
    });
  }

  return tl;
}


var foam = function() {
  var tl = new TimelineMax();
  
  tl.set(f2, {
    y: -100
  })
  tl.to(f2, .65, {
    y: 0,
    autoAlpha: 1,
  })    
  tl.to(f2, 2, {
    morphSVG: "#foam_1",
    ease: Back.easeInOut,
    repeat: 3,
    yoyo: true
  })
  
  return tl;
}


var text = function() {
  var tl = new TimelineMax();

  tl.to(texts[0], .5, {
    autoAlpha: 1
  });
  tl.to(texts[1], .5, {
    autoAlpha: 1
  });
  
  return tl;
}


var tl = new TimelineMax();
tl.add(liquid()).add(foam(), '-=.25').add(text(), '-=7.6');