document.addEventListener("DOMContentLoaded", function() {

	var opponent = '';
	var player = '';
    
	   document.getElementById('rock').addEventListener('click', function(){
    	player = 1
    });

    document.getElementById('paper').addEventListener('click', function(){
    	player = 2
    });

    document.getElementById('scissors').addEventListener('click', function(){
    	player = 3
    });
    
   document.getElementById("fight").onclick = function() {play()
     };

    function play() {
        opponent = Math.floor((Math.random() * 3) + 1);

	    if (opponent == 1) {
			document.getElementById('ai-hand').src='images/rock.jpg';
		} else if (opponent == 2) {
			document.getElementById('ai-hand').src='images/paper.jpg';
		} else if (opponent == 3) {
			document.getElementById('ai-hand').src='images/scissors.jpg';
		}

		  if (player = opponent){
    	alert('TIE!');
    }

    if (player = 1) {
    	if(opponent = 3) {
    		return 'WIN!';
    	}
    	else {
    		return 'LOSE!';
    	}
    }

    if (player = 2) {
    	if(opponent = 3) {
    		return 'LOSE!';
    	}
    	else {
    		return 'WIN!';
    	}
    }

    if (player = 3) {
    	if (opponent = 1){
    		return 'LOSE!'
    	}
    	else {
    		return 'WIN!'
    	}
    }
    }	


 



});