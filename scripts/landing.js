function searchButton(){
	let searchQuery = document.getElementById('searchQuery').value;
	window.open("https://www.google.com/search?q=" + searchQuery);
}

window.onscroll = function() {myFunction()};

let navbar = document.getElementById('navbar');
let sticky = navbar.offsetTop;
// console.log(navbar,sticky);

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}

// // Filler for testing purposes
// var div1 = document.getElementById('div1');
// for (let i=1;i<=100;i++){
//   var h1 = document.createElement('h1');
//   var text = document.createTextNode('Hello World!'+i);
//   h1.append(text);
//   div1.append(h1);
// }