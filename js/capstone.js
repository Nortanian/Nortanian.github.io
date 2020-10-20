
window.onscroll = function() {scrollFunction() };

function scrollFunction() {
  
  if (document.documentElement.scrollTop > 500) {
    
    document.getElementById("Gottothetopbutton").style.display = "block";

  } else {
    document.getElementById("Gottothetopbutton").style.display = "none";
  }

}
function Gotothetop(){
	document.documentElement.scrollTop=0;

}


function Animate(X){
	if(X==1)
	document.getElementById("anime1").style.visibility="visible";
    else if(X==2)
    	document.getElementById("anime2").style.visibility="visible";



}
function AnimateOut(Y){
/*	console.log("Hi");*/
if(Y==1)
	document.getElementById("anime1").style.visibility="hidden";
    else if(Y==2)
    	document.getElementById("anime2").style.visibility="hidden";
}