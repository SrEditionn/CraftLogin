$(document).ready(function(){
	$(".dvHex").hover(function(){
		$(this).children(".hexTop").css("border-bottom-color","#ffa605");
		$(this).children(".hexCenter").css("background-color","#ffa605");
		$(this).children(".hexBottom").css("border-top-color","#ffa605");
	}, function() {
		$(".hexTop").css("border-bottom-color","#1e2530");
		$(".hexCenter").css("background-color","#1e2530");
		$(".hexBottom").css("border-top-color","#1e2530");
	});
});

function um(){
	location.href="index.html"
}

function dois(){
	location.href="https://discord.gg/CPFA3qMSmu"
}

function tres(){
	location.href="https://craftsapiens.syncmarket.com.br/"
}

function quatro(){
	location.href="https://craftsapiens.com.br/warps/"
}

function cinco(){
	location.href="https://craftsapiens.com.br/events/"
}

function seis(){
	location.href="https://craftsapiens.com.br/index/"
}

function sete(){
	location.href="https://craftsapiens.com.br/contato/"
}