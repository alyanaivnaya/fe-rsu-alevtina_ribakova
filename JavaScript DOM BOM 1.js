var frame = {
	display: 'flex',
	justifyContent: 'stretch',
	alignItems: 'stretch',
	flexWrap: 'wrap',
	background: '#a0dfd1',
	border: '3px solid #6aad9e',
	borderRadius: '5px',
	maxWidth: '400px'
};
var content = {
	display: 'flex',
	justifyContent: 'stretch',
	alignItems: 'stretch',
	flexDirection: 'column',
	width: '100%',
	border: '2px solid #35c3ae',
	margin: '10px'
};
var header = {
	background: 'linear-gradient(to top, #ffc800, #ffc100)',
	fontFamily: 'sans-serif',
	fontSize: '16pt',
	padding: '7px 10px'
};
var triangle = {
  width: '0',
  height: '0',
  top: '0',
  position: 'relative',
  left: '15px',
  border: '10px solid transparent',
  borderTopColor: '#ffcc00',
  zIndex: '1'
};
var text = {
	marginTop: '-20px',
	fontFamily: 'sans-serif',
	fontSize: '11pt',
	fontWeight: '400',
	padding: '15px 10px',
	background: '#edecde',
	color: '#757575'
};

var frameelem = document.getElementById("frame");
var contentelem = document.getElementById("content");
var headerelem = document.getElementById("header");
var triangleelem = document.getElementById("triangle");
var textelem = document.getElementById("text");

for(var key in frame){
  frameelem.style[key] = frame[key];
}

for(var key in content){
  contentelem.style[key] = content[key];
}
for(var key in header){
  headerelem.style[key] = header[key];
}
for(var key in triangle){
  triangleelem.style[key] =triangle[key];
}
for(var key in text){
  textelem.style[key] = text[key];
}