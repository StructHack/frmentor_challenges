window.addEventListener("DOMContentLoaded",(event)=>{
	const slider = document.querySelector(".slider_1");
	const amount = document.querySelector("#amount");
	slider.addEventListener("input",(event)=>{
		amount.innerText = "$"+event.target.value+ ".00";
	});
});