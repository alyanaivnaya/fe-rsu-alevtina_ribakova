var head = {
	background: '#e6e5e5',
	width: '100%',
	height: '20px',
	borderBottom: '2px solid #aaaaab',
	position: 'relative',
	zIndex: '1'
}
var item = {
	background: '#35baf6',	
	color: '#fff',
	textAlign: 'center',	
	width: '150px',
	margin: 'auto',
	border: '1px solid #35baf6',
	fontSize: '14pt',
	zIndex: '-100',	
	padding: '1px 0'
}
var title = {
	background: '#35baf6',	
	color: '#fff',
	textAlign: 'center',	
	width: '150px',
	margin: 'auto',
	fontSize: '14pt',
	zIndex: '-100',	
	padding: '1px 0',
    border: '1px solid #0cacf4',
	borderRadius: '0 0 10px 10px',
	borderTop: '2px solid #7bb9f9'
}

var list = {	
	display: 'none'
}

var titleMouseOver = {
	boxShadow: '0 0 5px 2px rgba(53, 186, 246, .4)',
	cursor: 'pointer'
}
var titleMouseOut = {
	boxShadow: 'none'
}
var listVisible = {
	display: 'block'
}
var itemMouseOver = {	
	background: '#03a9f4',
	cursor: 'pointer'
}
var itemMouseOut = {	
	background: '#35baf6'
}

var headelem = document.getElementById("head");
var listelem = document.getElementById("list");
var itemarray = document.getElementsByClassName("item");
var item1elem = document.getElementById("item1");
var item2elem = document.getElementById("item2");
var item3elem = document.getElementById("item3");
var item4elem = document.getElementById("item4");
var item5elem = document.getElementById("item5");
var titleelem = document.getElementById("title");

for(var key in head){
  headelem.style[key] = head[key];
}
for(var key in list){
  listelem.style[key] = list[key];
}
for(var key in item){
	for(var i=0; i<itemarray.length; i++) {
		itemarray[i].style[key] = item[key];
	}
}
for(var key in title){
  titleelem.style[key] = title[key];
}

function makeCounter() {
    var currentCount = 1;
    return function() {
        return currentCount++;
    };
}
var clickCounter = makeCounter();

titleelem.addEventListener("mouseover", function() {
for(var key in titleMouseOver){
  titleelem.style[key] = titleMouseOver[key];
}});
titleelem.addEventListener("mouseout", function() {
for(var key in titleMouseOut){
  titleelem.style[key] = titleMouseOut[key];
}});
titleelem.addEventListener("click", function() {
if (clickCounter() % 2 != 0) {
    for(var key in listVisible){
        listelem.style[key] = listVisible[key];
    }
}
else {
    for(var key in list){
        listelem.style[key] = list[key];
    }
}});

for(var i=0; i<itemarray.length; i++) {
	itemarray[i].addEventListener("mouseover", function() {
		for(var key in itemMouseOver){
			itemarray[i].style[key] = itemMouseOver[key];
		}});
		itemarray[i].addEventListener("mouseout", function() {
			for(var key in itemMouseOut){
				itemarray[i].style[key] = itemMouseOut[key];
			}});
}

// item1elem.addEventListener("mouseover", function() {
// for(var key in itemMouseOver){
//   item1elem.style[key] = itemMouseOver[key];
// }});
// item2elem.addEventListener("mouseover", function() {
// for(var key in itemMouseOver){
//   item2elem.style[key] = itemMouseOver[key];
// }});
// item3elem.addEventListener("mouseover", function() {
// for(var key in itemMouseOver){
//   item3elem.style[key] = itemMouseOver[key];
// }});
// item4elem.addEventListener("mouseover", function() {
// for(var key in itemMouseOver){
//   item4elem.style[key] = itemMouseOver[key];
// }});
// item5elem.addEventListener("mouseover", function() {
// for(var key in itemMouseOver){
//   item5elem.style[key] = itemMouseOver[key];
// }});

// item1elem.addEventListener("mouseout", function() {
// for(var key in itemMouseOut){
//   item1elem.style[key] = itemMouseOut[key];
// }});
// item2elem.addEventListener("mouseout", function() {
// for(var key in itemMouseOut){
//   item2elem.style[key] = itemMouseOut[key];
// }});
// item3elem.addEventListener("mouseout", function() {
// for(var key in itemMouseOut){
//   item3elem.style[key] = itemMouseOut[key];
// }});
// item4elem.addEventListener("mouseout", function() {
// for(var key in itemMouseOut){
//   item4elem.style[key] = itemMouseOut[key];
// }});
// item5elem.addEventListener("mouseout", function() {
// for(var key in itemMouseOut){
//   item5elem.style[key] = itemMouseOut[key];
// }});