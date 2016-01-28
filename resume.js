var caughtupfrontface = false;
var caughtupbottomface = false;
var caughtuptopface = false;
var caughtuprightface = false;
var caughtupleftface = false;
var caughtupbackface= false;

//An angle needs to be associated for each rotation happening
var leftkeyangle = 0;
var upkeyangle = 0;

$(document).ready(function(){
	//hide all elements which will be animated later
	$("#work_exp1").hide();
	$("#work_exp2").hide();
	$("#work_exp3").hide();
	$("#education_senior_school_label").hide();
	$("#education_senior_school_board").hide();//css("width","0px");
	$("#education_senior_school_marks").hide();
	$("#education_junior_school_label").hide();
	$("#education_junior_school_board").hide();
	$("#education_junior_school_marks").hide();//css("width","0px");
	$("#email_sent_status_text").hide();
	
	document.onkeydown = checkkeyanimatecube;

	function checkkeyanimatecube(e) {
		switch (e.keyCode) {
        case 37:
            //alert('left');
			leftkeyangle+=90;
			$("#cube").css("transform", "translateZ(-250px)rotateY("+leftkeyangle+"deg)"); 
			if (leftkeyangle ==90 && caughtupleftface===false ) 
				{
					//run function 1 show left
					caughtupleftface=true;
					setTimeout(leftface,2000);
					
					
				}
			else if (leftkeyangle ===180 && caughtupbackface===false) 
				{
					//run function 2 show back
					caughtupbackface=true;
					setTimeout(backface,2000);
					
				}
			else if(leftkeyangle ===270 && caughtuprightface==='false') 
				{
					//run function 3 show right
					console.log(caughtuprightface);
					caughtuprightface=true;
					setTimeout(rightface,2000);
					
				}
            break;
        case 38:
            //alert('up');
			upkeyangle-=90;
			$("#cube").css("transform", "translateZ(-250px)rotateX("+upkeyangle+"deg)"); 
			if (upkeyangle ===-90 && caughtuptopface===false) 
				{
					//run function 3 show top
					//console.log("top-face");
					caughtuptopface=true;
					setTimeout(topface,2000);
					
				}
			else if (upkeyangle ===-180 && caughtupbackface===false) 
				{
					//run function 2 show back
					caughtupbackface=true;
					setTimeout(backface,2000);
					
				}
			else if(upkeyangle ===-270 && caughtupbottomface===false) 
				{
					//run function 1 show bottom
					//downface;
					caughtupbottomface=true;
					setTimeout(bottomface,2000);
					
				}
            break;
        case 39:
           //alert('right');
			leftkeyangle-=90;
			$("#cube").css("transform", "translateZ(-250px)rotateY("+leftkeyangle+"deg)"); 
			if (leftkeyangle ===-90 && caughtuprightface===false) 
				{
					//run function 3 show right
					//rightface;
					console.log(caughtuprightface);
					caughtuprightface=true;
					setTimeout(rightface,2000);
					
				}
			else if (leftkeyangle ===-180 && caughtupbackface===false) 
				{
					//run function 2 show back
					//backface;
					caughtupbackface=true;
					setTimeout(backface,2000);
					
				}
			else if(leftkeyangle ===-270 && caughtupleftface===false) 
				{
					//run function 1 show left
					//leftface;
					caughtupleftface=true;
					setTimeout(leftface,2000);
					
				}
            break;
        case 40:
            //alert('down');
			upkeyangle+=90;
			$("#cube").css("transform", "translateZ(-250px)rotateX("+upkeyangle+"deg)"); 
			if (upkeyangle ===90 && caughtupbottomface===false) 
				{
					//run function 1 bottom
					caughtupbottomface=true;
					setTimeout(bottomface,2000);
					//downface;
					
				}
			else if (leftkeyangle ===180 && caughtupbackface===false) 
				{
					//run function 2 back 
					//backface;
					caughtupbackface=true;
					setTimeout(backface,2000);
					
				}
			else if(leftkeyangle ===270 && caughtuptopface===false) 
				{
					//run function 3 top
					caughtuptopface=true;
					setTimeout(topface,2000);	
				}
            break;
    }
};


//replaceCirclesWithPaths($('svg'));
$("#cube").css({'-webkit-animation' : 'onlod 2s ease 500ms 1 normal ',
		'-moz-animation' : 'onlod 2s ease 500ms 1 normal ',
		'-ms-animation' : 'onlod 2s ease 500ms 1 normal ',
		'animation' : 'onlod 2s ease 500ms 1 normal '
		}); 
	
setInterval ('cursorAnimation()', 800);

$(".rubik").delay(2000).fadeOut(1000);   // actual value is 1000fade rubik's image on all faces 


//$(".rubik").delay(3000).hide("explode",{pieces:9},800)
//$(".contact").click(function(){

//show frontface
setTimeout(function(){
	//if (caughtupf==false){
		$("#image-cont").show();
	   var width = $("#image-cont").width();    // Current image width
	   var height = $("#image-cont").height();  // current image height
	   var aspr=height/width;   // Current image height
	   var newwid=200;
	   var newh=aspr*newwid;  
	   //console.log(newh);
	   $("#image-cont").animate({marginLeft:'140px',marginTop:'30px', width:newwid+'px',height:newh+'px'},500); 
	   //drawSVGPaths($('svg'), 1000, 2000, 50);
	   //var path = $('#path1').get(0);  //works
	   //var pathLen = path.getTotalLength();
	   //console.log(pathLen);
	   $("#path1").css({'-webkit-animation' : 'dash 2s ease-in-out 500ms 1 normal forwads',
		'-moz-animation' : 'dash 2s ease-in-out 500ms 1 normal forwards',
		'-ms-animation' : 'dash 2s ease-in-out 500ms 1 normal forwards',
		'animation' : 'dash 2s ease-in-out 500ms 1 normal forwards'
		});
	   $("#cursorf").fadeIn(1000);
	   //mycaption1 = $('#my-caption').text();
	   //console.log(mycaption1);
	   caption = "Manish Jangid";
	   boxedit1 = $('#edit1');
	   caption2 = "+91-9911179163";
	   boxedit2 = $('#edit2');
	   caption3 = "meetmkjangid@gmail.com";
	   boxedit3 = $('#edit3');
	   //boxedit1= $('#edit1');
	   //var comp1=0;
	   setTimeout(function() {typing_effect(caption,boxedit1,false);}, 2500);//.done(function() {typing_effect(caption2,boxedit2);});
	   setTimeout(function() {typing_effect(caption2,boxedit2,false);}, 5000);//typing_effect(caption,boxedit1).done(testTypingEffect(caption2,boxedit2));
	   setTimeout(function() {typing_effect(caption3,boxedit3,true);}, 8300);//.done(function() {testTypingEffect(caption2,boxedit2);});
	   //caughtupf=true;
	   //.done(console.log("was here 2"));//$("#cursor").fadeOut(1000));
	//}
},3000);


$("#email_me_button_submit").click(function(){
	//reset any warning values that might have been set
	$("#email_me_field_name").css('border-color',''); 
	$("#email_me_field_email").css('border-color',''); 
	$("#email_me_field_message").css('border-color','');
	$("#email_me_field_name_error_div").text("");   
	$("#email_me_field_email_error_div").text("");
	$("#email_me_field_message_error_div").text("");
	 
	
	//var proceed identifies whether to sumbit email through ajax
	var proceed = true;
    //simple validation at client's end for name field
	    if(!$.trim($("#email_me_field_name").val())){ //if this field is empty 
			$("#email_me_field_name").css('border-color','red'); 
			$("#email_me_field_name_error_div").text("Required");
			//change border color to red   
			proceed = false; //set do not proceed flag
        }
        
        //simple validation at client's end for email field
        if(!$.trim($("#email_me_field_email").val())){ //if this field is empty 
			$("#email_me_field_email").css('border-color','red'); 
			$("#email_me_field_email_error_div").text("Required");
			//change border color to red   
			proceed = false; //set do not proceed flag
        }
        
        //check if its a valid email
        var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
        if (!email_reg.test($.trim($("#email_me_field_email").val()))){
			$("#email_me_field_email").css('border-color','red'); 
			$("#email_me_field_email_error_div").text("Email is not legible.");
			//change border color to red   
			proceed = false; //set do not proceed flag
			
		}
		
		if(!$.trim($("#email_me_field_message").val())){ //if this field is empty 
			$("#email_me_field_message").css('border-color','red'); 
			$("#email_me_field_message_error_div").text("Required");
			//change border color to red   
			proceed = false; //set do not proceed flag
        }
        
        if(proceed) //everything looks good! proceed...
        {
			$("#email_me_container").fadeOut(0,function(){      
				$("#rolling_svg").show();
				});
            //get input field values data to be sent to server
            post_data = {
                'user_name'     : $('input[name=name]').val(), 
                'user_email'    : $('input[name=email_id]').val(), 
                'message_to_be_sent'  : $('textarea[name=email_message]').val()
            };
            
            //Ajax post data to server
            $.post('contact_emailer.php', post_data, function(response){  
                if(response.type == 'error'){ //load json data from server and output message     
                    output = response.text;
                    console.log(output);
                    $("#rolling_svg").fadeOut(3000,"easeInExpo",function(){
							$("#email_sent_status_text").text(output);
							$("#email_sent_status_text").show(0,function(){
								$("#email_sent_status_text").fadeOut(3000,"easeInExpo",function(){
									$("#email_me_container").show();
									});
								});
							
							
					});
                }
                else{
                    output = response.text;
                    console.log(output);
                    $("#rolling_svg").fadeOut(3000,"easeInExpo",function(){
							$("#email_sent_status_text").text(output);
							$("#email_sent_status_text").show(0,function(){
								$("#email_sent_status_text").fadeOut(3000,"easeInExpo",function(){
									//reset values in all input fields
									$("#email_me_field_name").val(""); 
									$("#email_me_field_email").val(""); 
									$("#email_me_field_message").val("");
									$("#email_me_container").show();
									});
								});
					});
                }
            }, 'json');
        }
});

});

/////*********functions outside document.ready block ************/////////////////////
function backface(){
	console.log("back-face");
	//$("#work_exp1").animate()
	$("#work_exp1").show(800,function(){
		$(this).animate({
			"width":"425px",
		}).delay(400).animate({
			"height":"57px",
			"opacity":"1"
			})
	});
	
	$("#work_exp2").delay(1000).show(800,function(){
		$(this).animate({
			"width":"425px",
		}).delay(400).animate({
			"height":"57px",
			"opacity":"1"
			})
	});
	
	$("#work_exp3").delay(2000).show(800,function(){
		$(this).animate({
			"width":"425px",
		}).delay(400).animate({
			"height":"57px",
			"opacity":"1"
			})
	});//.animate({height:"70px"});
	//$("#work_exp1").delay(1000).animate()
 //$("#cube").css("transform","translateZ(-250px)rotateX(-180deg)"); 
 //$("#cube").css("transform","translateZ(-250px)rotateY(-180deg)"); 
};

//$(".top").click(function(){
//skills 
function topface(){
	/*$(".hzline").css({'-webkit-animation' : 'hzline_animate 2s ease-in-out 500ms 1 normal forwads',
		'-moz-animation' : 'hzline_animate 2s ease-in-out 500ms 1 normal forwards',
		'-ms-animation' : 'hzline_animate 2s ease-in-out 500ms 1 normal forwards',
		'animation' : 'hzline_animate 2s ease-in-out 500ms 1 normal forwards'
		});*/
	
	console.log("top-face");
	$("#skill_1_a").attr("src","/images/pic_bulbon.gif");
	$("#skill_1_b").delay(200).queue(function(next) { $(this).attr("src","/images/pic_bulbon.gif"); next(); });
	$("#skill_1_c").delay(400).queue(function(next) { $(this).attr("src","/images/pic_bulbon.gif"); next(); });
	$("#skill_2_a").queue(function(next) { $(this).attr("src","/images/pic_bulbon.gif"); next(); });
	$("#skill_2_b").delay(200).queue(function(next) { $(this).attr("src","/images/pic_bulbon.gif"); next(); });
	$("#skill_2_c").delay(400).queue(function(next) { $(this).attr("src","/images/pic_bulbon.gif"); next(); });
	//$("#skill_2_d").delay(600).queue(function(next) { $(this).attr("src","pic_bulbon.gif"); next(); });
	$("#skill_3_a").queue(function(next) { $(this).attr("src","/images/pic_bulbon.gif"); next(); });
	$("#skill_3_b").delay(200).queue(function(next) { $(this).attr("src","/images/pic_bulbon.gif"); next(); });
	$("#skill_3_c").delay(400).queue(function(next) { $(this).attr("src","/images/pic_bulbon.gif"); next(); });
	$("#skill_4_a").queue(function(next) { $(this).attr("src","/images/pic_bulbon.gif"); next(); });
	$("#skill_6_a").queue(function(next) { $(this).attr("src","/images/pic_bulbon.gif"); next(); });
	$("#skill_6_b").delay(200).queue(function(next) { $(this).attr("src","/images/pic_bulbon.gif"); next(); });
	$("#skill_7_a").queue(function(next) { $(this).attr("src","/images/pic_bulbon.gif"); next(); });
	//$("#skill_1_b").attr("src","pic_bulbon.gif");
	//$("#skill_1_c").attr("src","pic_bulbon.gif");
	//$("#skill_1_d").attr("src","pic_bulbon.gif");
   //$("#cube").css("transform","translateZ(-250px) rotateX(  -90deg )");
};

//$(".down").click(function(){
function bottomface(){
	
	console.log("bottom-face");
	//$("#cube").css("transform","translateZ( -250px ) rotateX(90deg )");
	//console.log("Was here quote");
	$("#cursord").fadeIn(1000);
	caption = $('.qod-text').text();
	//console.log(caption);
	boxedit1 = $('#edit-text');
	caption2 = $('.qod-author').text();
	lengthtext=caption.length;
	//console.log(lengthtext);
	//console.log(caption2);
	boxedit2 = $('#edit-author');
	setTimeout(function() {typing_effect(caption,boxedit1,false);}, 2500);
	setTimeout(function() {typing_effect(caption2,boxedit2,true);}, Math.round(lengthtext*100+3500));
	caughtupd=true;	  
};

//$(".left").click(function(){
function leftface(){
	//$("#cube").css("transform","translateZ( -250px ) rotateY( 90deg )");
};

//$(".right").click(function(){
function rightface(){
	console.log("rightface_funct");
	console.log(caughtuprightface);
	$('#education_slider1').bjqs({
		'height' : 150,
		'width' : 500,
		'responsive' : true,
		'automatic' : true,
		'showcontrols' : false,
		'animtype':'slide',
		'animduration' : 300,
		'showmarkers' : false,
		'keyboardnav':false,
		'hoverpause': true
		 
	});
	
	$("#education_senior_school_label").show();
	$("#education_senior_school_board").show(400,function(){
		 $("#education_senior_school_board").animate({"margin-left":"200px"},function(){
				 $("#education_senior_school_marks").show(400,function(){
					$("#education_senior_school_marks").animate({"margin-left":"300px"});
				 });
		})
	});
	
	$("#education_junior_school_label").show();
	$("#education_junior_school_board").show(400,function(){
		 $("#education_junior_school_board").animate({"margin-left":"200px"},function(){
				 $("#education_junior_school_marks").show(400,function(){
					$("#education_junior_school_marks").animate({"margin-left":"300px"});
				 });
		})
	});

};
//code to handle email submits on submit button click bu user	

//function to animate cursor opacity with time 
function cursorAnimation() {
    $('.cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

//audio element inserted along with cursor 
var audio_cursor = document.createElement('audio');
audio_cursor.setAttribute('src', '/sound/cursor_sound.mp3');
//audioElement.setAttribute('autoplay', 'autoplay');


//function to create a typing effect
function typing_effect(caption,boxed,end) {
	//var r = $.Deferred();
  // do whatever you want (e.g. ajax/animations other asyc tasks)
	captionLength=0;
	typing_effect_subfunc(caption,boxed,end,captionLength);
	//setTimeout(function () {
    // and call `resolve` on the deferred object, once you're done
	//	r.resolve();
	//}, 2500);
  // return the deferred object
	//return r;
}
 
// function typing_effect_subfunc is a sub-function to be called with test
function typing_effect_subfunc(caption,boxed,end,captionLength) {
	audio_cursor.play();
    boxed.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1 ) {
		setTimeout(function() {typing_effect_subfunc(caption,boxed,end,captionLength);},100);
        //setTimeout('typero(caption,boxed)', 100);
    } else if (end==false){
		boxed.html(caption+'<br\>');
        //captionLength = 0;
        //caption = '';
		//console.log("was here1");
    }
	else{
		//boxed.html(caption+'<br\>');
        //captionLength = 0;
        //caption = '';
		//console.log("was here2");
    }
}




/*
jQuery.extend( jQuery.easing,
{
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
  }
});

/*function SVG(tag) {
    return document.createElementNS('http://www.w3.org/2000/svg', tag);
}*/

/*function to convert circle to path element
function replaceCirclesWithPaths(parentElement) {  
    var circles = $(parentElement).find('circle');
    $.each(circles, function() {

        var cX = $(this).attr('cx');
        var cY = $(this).attr('cy');
        var r = $(this).attr('r');
        var r2 = parseFloat(r * 2);

        var convertedPath = 'M' + cX + ', ' + cY + ' m' + (-r) + ', 0 ' + 'a ' + r + ', ' + r + ' 0 1,0 ' + r2 + ',0 ' + 'a ' + r + ', ' + r + ' 0 1,0 ' + (-r2) + ',0 ';

        $(SVG('path'))
        .attr('d', convertedPath)
        .attr('fill', $(this).attr('fill'))
        .attr('stroke', $(this).attr('stroke'))
        .attr('stroke-width', $(this).attr('stroke-width'))
        .insertAfter(this);

    });
}


function drawSVGPaths(_parentElement, _timeMin, _timeMax, _timeDelay) {


    var paths = $(_parentElement).find('path');

    //for each PATH..
    $.each( paths, function(i) {

        //get the total length
        var totalLength = this.getTotalLength();


        //set PATHs to invisible
        $(this).css({
            'stroke-dashoffset': totalLength,
            'stroke-dasharray': totalLength + ' ' + totalLength
        });

        //animate
        $(this).delay(_timeDelay*i).animate({
            'stroke-dashoffset': 0
        }, {
            duration: _timeMax + _timeMin
            ,easing: 'easeInOutQuad'
        });
    });
}*/
