window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)};
 
 
function parallaxcube(){
 var stuk1 = document.getElementById('stuk1');
 var scrolltop = window.scrollY; // get number of pixels document has scrolled vertically
 //console.log(scrolltop);
 /*if(scrolltop > 200){
 	stuk4.style.top = (200*2) + 'px';
 	stuk4.style.left = 50 + 'px';
 }
 else if(scrolltop > 100){
 	stuk4.style.top = (100*2) + 'px';
 	stuk4.style.left = 40 + 'px';
 }
 else if(scrolltop >= 0){
 	stuk4.style.top = 7 + 'px';
 	stuk4.style.left = 30 + 'px';
 }*/
 
 var stuk1top;
 var stuk1left;
 console.log(stuk1top);

 stuk1top = -93 + (scrolltop * 0.5 ); // move bubble1 at 20% of scroll rate
 stuk1left = -72 + (scrolltop * 0.2 );

 if(stuk1top > 1){
 	stuk1top = 0;
 	stuk1left = 0;
 }
 else
 {
 	 console.log(stuk1top);
 }
 stuk1.style.top = stuk1top + 'px';
 stuk1.style.left = stuk1left + 'px';
 

}
 
window.addEventListener('scroll', function(){ // on page scroll
 requestAnimationFrame(parallaxcube); // call parallaxcube() on next available screen paint
}, false);