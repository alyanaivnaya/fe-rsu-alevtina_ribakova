function makeCounter() {
    var currentCount = 1;
    return function() {
        return currentCount++;
    };
}
var clickCounter = makeCounter();

$(document).ready(function(){
    $("#head").css(
			{'background': '#e6e5e5',
			'width': '100%',
			'height': '20px',
			'borderBottom': '2px solid #aaaaab',
			'position': 'relative',
			'zIndex': '1'
		});

		$(".item").css(
			{'background': '#35baf6',
			'color': '#fff',
			'textAlign': 'center',
			'width': '150px',
			'margin': 'auto',
			'border': '1px solid #35baf6',
			'fontSize': '14pt',
			'zIndex': '-100',
			'padding': '1px 0'
		});
		
		$("#title").css(
			{'background': '#35baf6',
			'color': '#fff',
			'textAlign': 'center',
			'width': '150px',
			'margin': 'auto',
			'fontSize': '14pt',
			'zIndex': '-100',
			'padding': '1px 0',
			'border': '1px solid #0cacf4',
			'borderRadius': '0 0 10px 10px',
			'borderTop': '2px solid #7bb9f9'
		});
		
		$("#list").css(
			{'display': 'none'
		});
		
		$("#title").mouseover(
			function() {
				$(this).css(
					{'boxShadow': '0 0 5px 2px rgba(53, 186, 246, .4)',
					'cursor': 'pointer'
				});
			}
		);

		$("#title").mouseout(
			function() {
				$(this).css(
					{'boxShadow': 'none'
				});
			}
		);

		$("#title").click(
			function() {
				if (clickCounter() % 2 != 0) {
					$("#list").css(
						{'display': 'block'
					});
				}
				else {
					$("#list").css(
						{'display': 'none'
					});
		}});

		$(".item").mouseover(
			function() {
				$(this).css(
					{'background': '#03a9f4',
					'cursor': 'pointer'
				});
			}
		);

		$(".item").mouseout(
			function() {
				$(this).css(
					{'background': '#35baf6'
				});
			}
		);	
});