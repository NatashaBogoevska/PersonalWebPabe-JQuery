window.onload=function(){

$(document).ready(function(){

  $('#post1').click(function(){
    var input1=$('#comment-box1').val();
    if(input1!==""){
    $(  $('#unordered1').append(input1+'<br>'+'<hr>')).addClass("bojaKom");
    $('#comment-box1').val("");
    }
  });

  $('#post2').click(function(){
    var input2=$('#comment-box2').val();
    if(input2!==""){
    $( $('#unordered2').append(input2+'<br>'+'<hr>')).addClass("bojaKom");
    $('#comment-box2').val("");
    }
  });

  $('#post3').click(function(){
    var input3=$('#comment-box3').val();
    if(input3.trim()!==""){
    $( $('#unordered3').append(input3+'<br>'+'<hr>')).addClass("bojaKom");
    $('#comment-box3').val("");
    }else {
      $('#comment-box3').val($('#comment-box3').attr('placeholder'));
    }
  });

  $('#post4').click(function(){
    var input4=$('#comment-box4').val();
    if(input4!==""){
    $( $('#unordered4').append(input4+'<br>'+'<hr>')).addClass("bojaKom");
    $('#comment-box4').val("");
    }
  });

  $('#post5').click(function(){
    var input5=$('#comment-box5').val();
    if(input5!==""){
    $( $('#unordered5').append(input5+'<br>'+'<hr>')).addClass("bojaKom");
    $('#comment-box5').val("");
    }
  });

  $('#post6').click(function(){
    var input6=$('#comment-box6').val();
    if(input6.trim()!==""){
    $( $('#unordered6').append(input6+'<br>'+'<hr>')).addClass("bojaKom");
    $('#comment-box6').val("");
    }else {
      $('#comment-box6').val($('#comment-box6').attr('placeholder'));
    }
  });

var liked1 = parseInt($('#number1').text());
let check1 = 1;

$('#like1').on("click", function() {
  if (Boolean(check1)) {
    check1 = 0;
    liked1 = liked1 + 1;
    $('#number1').text(liked1);
    $('#like1').text('💗');
  } else {
    check1 = 1;
    liked1 = liked1 - 1;
    $('#number1').text(liked1);
    $('#like1').text('🤍');
  }
});

var liked2 = parseInt($('#number2').text());
let check2 = 1;
$('#like2').on("click", function() {
  if (Boolean(check2)) {
    check2 = 0;
    liked2 = liked2 + 1;
    $('#number2').text(liked2);
    $('#like2').text('💗');
  } else {
    check2 = 1;
    liked2= liked2 - 1;
    $('#number2').text(liked2);
    $('#like2').text('🤍');
  }
});

var liked3 = parseInt($('#number3').text());
let check3 = 1;
$('#like3').on("click", function() {
  if (Boolean(check3)) {
    check3 = 0;
    liked3 = liked3 + 1;
    $('#number3').text(liked3);
    $('#like3').text('💗');
  } else {
    check3 = 1;
    liked3 = liked3 - 1;
    $('#number3').text(liked3);
    $('#like3').text('🤍');
  }
});

var liked4 = parseInt($('#number4').text());
let check4 = 1;
$('#like4').on("click", function() {
  if (Boolean(check4)) {
    check4 = 0;
    liked4 = liked4 + 1;
    $('#number4').text(liked4);
    $('#like4').text('💗');
  } else {
    check4 = 1;
    liked4 = liked4 - 1;
    $('#number4').text(liked4);
    $('#like4').text('🤍');
  }
});

var liked5 = parseInt($('#number5').text());
let check5 = 1;
$('#like5').on("click", function() {
  if (Boolean(check5)) {
    check5 = 0;
    liked5 = liked5 + 1;
    $('#number5').text(liked5);
    $('#like5').text('💗');
  } else {
    check5 = 1;
    liked5 = liked5 - 1;
    $('#number5').text(liked5);
    $('#like5').text('🤍');
  }
});

var liked6=parseInt($('#number6').text());
let check6 = 1;
$('#like6').on("click", function() {
  if (Boolean(check6)) {
    check6 = 0;
    liked6 = liked6 + 1;
    $('#number6').text(liked6);
    $('#like6').text('💗');
  } else {
    check6 = 1;
    liked6 = liked6 - 1;
    $('#number6').text(liked6);
    $('#like6').text('🤍');
  }
});

$("a").hover(function(){
  $(this).css("color","deeppink");
},function(){
  $(this).css("color","black");
});

$('#post1,#post2,#post3,#post4,#post5,#post6').hover(function(){
  $(this).css("background-color","deeppink");
},function(){
  $(this).css("background-color","rgb(218, 135, 170)");
});

});
}
