var btn = document.getElementsByClassName("btn")[0];
const fontText = document.querySelector('.font-text')
const bg = document.querySelector('.bg')
var bgIconText = document.getElementsByClassName("bgIconText");

window.onmousewheel=document.onmousewheel=(e)=>{
	if(e.wheelDelta<0){
		console.log("咻~")
		bg.classList.add('up')
	}else if(e.wheelDelta>0){
		console.log("卟~")
		bg.classList.remove('up')
	}
}

mouseDowm = function(item){
	bgIconText[item-1].style.width = "10rem"
}

mouseUp = function(item){
	bgIconText[item-1].style.width = "0rem"
}

btn.addEventListener('click', () => bg.classList.add('up'))

loadText = document.querySelector('.loading-text')




{
	let load = 0
	let int = setInterval(blurring, 30)
	function blurring() {
	  load++
	  if (load > 99) {
		clearInterval(int)
	  }
	  loadText.innerText = `${load}%`
	  loadText.style.opacity = scale(load, 0, 100, 1, 0)
	  fontText.style.opacity = scale(load, 0, 100, 1, 0)
	  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
	}
	const scale = (num, in_min, in_max, out_min, out_max) => {
	  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
	}
}


const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))

