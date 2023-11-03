//your JS code here. If required.
let panels=document.querySelectorAll(".panel");

for(let i=0;i<panels.length;i++){
	panels[i].addEventListener("click", onClickToggle)
}

function onClickToggle(e) {
let current=e.target;
	
	for(let i=0;i<panels.length;i++){
	if(panels[i].classList.containe(".active")){
		panels[i].classList.toggle(".active")
	}
		current.classList.toggle(".active");
}
}