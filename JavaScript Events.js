var list = document.getElementById('list');
var btn = document.getElementById('btn');
var txt = document.getElementById('txt');
var faarray = document.getElementsByClassName('fa-times');

function del() {
	if (confirm('Are you sure you want to delete this item?')) {
		this.parentNode.remove();
	}
};

for(var i=0; i<faarray.length; i++) {
	faarray[i].addEventListener('click', function() {
		return del.call(this);
	});
}

btn.addEventListener('click', function() {
	if (txt.value) {
		return (function () {
			if (confirm('Are you sure you want to add new ToDo item: ' + txt.value + '?')) {
				list.innerHTML = list.innerHTML + '<div class="item"><span><input type="checkbox" checked>' + txt.value + '</span><i class="fa fa-times" aria-hidden="true"></i></div>';
				var faarray = document.getElementsByClassName('fa-times');
				for(var i=0; i<faarray.length; i++) {
					faarray[i].addEventListener('click', function() {
						return del.call(this);
					});
				}
			}
			txt.value = '';						
	})();
}	
});