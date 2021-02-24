$(function(){
	'use strict';
	$(window).scroll(function(){
		if ($(window).scrollTop()>= 100){
			$('button.up').show();
		}
	});
	$('button.up').on('click',function(){
		$(window).scrollTop(0);
	});

	$(".test img").on("click",function(){
		$(this).animate({
			'opacity':'1'
		}).parent().siblings().find("img").animate({
			'opacity':'.5'
		});
	
	});
	$(".test:first-of-type img").on("click",function(){
		$("#testmonials .words .ashley").fadeIn(500).siblings().fadeOut(500);
		$(this).animate({
			'width':'100%'
		}).parent().siblings().find("img").css({'width':'70%'});
	});
	$(".test:nth-of-type(2) img").on("click",function(){
		$("#testmonials .words .olivia").fadeIn(500).siblings().fadeOut(500);
		$(this).animate({
			'width':'100%'
		}).parent().siblings().find("img").css({'width':'70%'});
	});
	$(".test:nth-of-type(3) img").on("click",function(){
		$("#testmonials .words .taylor").fadeIn(500).siblings().fadeOut(500);
		$(this).animate({
			'width':'100%'
		}).parent().siblings().find("img").css({'width':'70%'});
	});
});