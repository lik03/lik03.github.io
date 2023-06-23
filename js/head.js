var navli = document.getElementsByClassName("navli")[0];
var headTz = document.getElementsByClassName("head-tz")[0];

navli.onmouseenter = function(){
	headTz.style.height = "240px";
};
headTz.onmouseleave = function(){
	headTz.style.height = "0px";
};