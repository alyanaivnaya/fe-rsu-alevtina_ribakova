$(document).ready(function(){
    $(".frame").css(
			{"display": 'flex',
			"justifyContent": 'stretch',
			"alignItems": 'stretch',
			"flexWrap": 'wrap',
			"background": '#a0dfd1',
			"border": '3px solid #6aad9e',
			"borderRadius": '5px',
			"maxWidth": '400px'
		});

		$(".content").css(
			{"display": 'flex',
			"justifyContent": 'stretch',
			"alignItems": 'stretch',
			"flexDirection": 'column',
			"width": '100%',
			"border": '2px solid #35c3ae',
			"margin": '10px'
		});
		
		$(".header").css(
			{'background': 'linear-gradient(to top, #ffc800, #ffc100)',
			'fontFamily': 'sans-serif',
			'fontSize': '16pt',
			'padding': '7px 10px'
		});
		
		$(".triangle").css(
			{'width': '0',
			'height': '0',
			'top': '0',
			'position': 'relative',
			'left': '15px',
			'border': '10px solid transparent',
			'borderTopColor': '#ffcc00',
			'zIndex': '1'
		});
		
		$(".text").css(
			{'marginTop': '-20px',
			'fontFamily': 'sans-serif',
			'fontSize': '11pt',
			'fontWeight': '400',
			'padding': '15px 10px',
			'background': '#edecde',
			'color': '#757575'
		});
});