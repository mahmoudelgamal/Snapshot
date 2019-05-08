// JavaScript Document

$(document).ready(function(){

//start smooth scroll
 var scroll = new SmoothScroll('a[href*="#"]');﻿
//start shuffle images

$('.head ul li').on('click',function(){
    $(this).addClass('activation').siblings().removeClass('activation');
		  console.log($(this).data('class'));

	if ($(this).data('class') === '.all') {
      $('.images .col-md .figure').css('opacity','1');
    } else {
      $('.images .col-md .figure').css('opacity','.1');
      $($(this).data('class')).parent().css('opacity','1');
    }
	})


})