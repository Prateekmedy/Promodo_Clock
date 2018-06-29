$(document).ready(function(){

	var terminate = $("#alarm")[0];
	
	$('#reset').hide();
	var sessionCount = parseInt($("#sessionTime").html());
	var breakCount = parseInt($("#breakTime").html());

	$("#play").click(function(){

		var timer = setInterval(counter, 1000);
		sessionCount *= 60;
		breakCount *= 60;

		function counter(){
			$("#sessionText, #incBtnS, #decBtnS, #breakText, #breakTime, #incBtnB, #decBtnB, #play").hide();
			$("#timeTitle").show();
			$("#timeTitle").html("Session Time: ");
			sessionCount -=1;
			if(sessionCount ===0){
				terminate.play();
				clearInterval(timer);
				var startBreak = setInterval(breakTimer, 1000);
				$("#sessionTime").hide();
			}
			if(sessionCount%60>=10){
				$("#sessionTime").html(Math.floor(sessionCount/60) + ":" + sessionCount%60);
			}else{
				$("#sessionTime").html(Math.floor(sessionCount/60) + ":" + "0" + sessionCount%60);
			}
			

			function breakTimer(){
				$("#timeTitle").show();
				$("#timeTitle").html("Break Time: ");
				$("#breakTime").show();
				breakCount -=1;
				if(breakCount ===0){
					terminate.play();
					clearInterval(startBreak);
					$("#reset").show();
					$("#timeTitle,#breakTime").hide();
					
				}
				if(breakCount%60>=10){
					$("#breakTime").html(Math.floor(breakCount/60) + ":" + breakCount%60);
				}else{
					$("#breakTime").html(Math.floor(breakCount/60) + ":" + "0" + breakCount%60);
				}
				
			}
		}
	});
	
	$("#reset").click(function(){
		sessionCount = 5;
		breakCount = 5;
		$("#sessionTime").html(sessionCount);
		$("#breakTime").html(breakCount);
		$("#sessionText, #sessionTime, #incBtnS, #decBtnS, #breakText, #breakTime, #incBtnB, #decBtnB, #play").show();
		$("#reset").hide();
	});

	$("#decBtnS").click(function(){
		if(sessionCount > 5){
			sessionCount -= 5;
			$("#sessionTime").html(sessionCount);
		}
	});
	$("#incBtnS").click(function(){
		
			sessionCount += 5;
			$("#sessionTime").html(sessionCount);
		
	});

	$("#decBtnB").click(function(){
		if(breakCount > 1){
			breakCount -= 1;
			$("#breakTime").html(breakCount);
		}
	});
	$("#incBtnB").click(function(){
		
			breakCount += 1;
			$("#breakTime").html(breakCount);
		
	});
});