//your JS code here. If required.
let panels=document.querySelectorAll(".panel");

// for(let i=0;i<panels.length;i++){
// 	panels[i].addEventListener("click", onClickToggle)
// }

function onClickToggle(e) {

	for(let i=0;i<panels.length;i++){
	
		panels[i].classList.remove("active")
	
	}
		
		
			e.classList.add("active");
			
			
}
