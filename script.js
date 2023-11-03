//your JS code here. If required.
let panels=document.querySelectorAll(".panel");

for(let i=0;i<panels.length;i++){
	panels[i].addEventListener("click", onClickToggle)
}

function onClickToggle(e) {
let current=e.target;
	console.log(current);
	for(let i=0;i<panels.length;i++){
	if(panels[i].classList.contains("active")){
		panels[i].classList.remove("active")
	}
		if(current.classList.contains("active"))
			return;
		else
			current.classList.add("active")
			
}
}