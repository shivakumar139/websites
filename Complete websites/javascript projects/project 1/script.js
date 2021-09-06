let container = document.querySelector('#container');
container.addEventListener("click",function(){
	let textArea = document.createElement('textarea');
	container.replaceWith(textArea);
	textArea.style.width = `300px`;
	textArea.style.height = `300px`;
	textArea.style.border = `1.5px solid #eee`;
	let value = container.toString(
		);
	console.log(value);
	textArea.innerText = value;
});