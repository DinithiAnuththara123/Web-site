window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
const clickC = document.querySelector(".desc");

clickC.addEventListener ("click", function (){
  const r = Math.round(Math.random() * 255 + 0);
  const g = Math.round(Math.random() * 255 + 0);
  const b = Math.round(Math.random() * 255 + 0);
  
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});


$(function(){
	$('.repeat').click(function(){
    	var classes =  $(this).parent().attr('class');
        $(this).parent().attr('class', 'animate');
        var indicator = $(this);
        setTimeout(function(){ 
        	$(indicator).parent().addClass(classes);
        }, 20);
    });
});
