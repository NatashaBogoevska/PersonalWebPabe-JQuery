/*window.addEventListener("load",start,false);

function start()
{
    var submit=document.getElementById("submit");
    submit.addEventListener("click",blog,false);
}

function blog()
{

    var textBox=document.getElementById("post").value;
    var paragraph=document.createElement("p");
    var text=document.createTextNode(textBox);
    paragraph.appendChild(text);
    document.getElementById("objava").appendChild(paragraph);

    var dateI=document.getElementById("data").value;
    var sec=document.createElement("div");
    var dateO=document.createTextNode(dateI);
    sec.appendChild(dateO);
    paragraph.appendChild(sec);

}*/

window.onload=function(){
$(document).ready(function(){

    $('#submit').on("click",function(){
        var tema=$('#tema').val();
        var naslov=$('#naslov').val();
        var tekst=$('#post').val();
        var data=$('#data').val();
        if((tema&&naslov&&post&&data)!==""){
            ($('#objava').append(tema+'<br>'+naslov+'<br>'+tekst+'<br>'+data+'<br>')).addClass('nova');
            $('#tema').val("");
            $('#naslov').val("");
            $('#post').val("");
            $('#data').val("");
        }
    });

    $('.prva,.vtora,#objava').hover(function(){
        $(this).css("background-color","rgba(249, 204, 178)");
      },function(){
        $(this).css("background-color","rgba(249, 204, 178, 0.689)");
      });

      $("a").hover(function(){
        $(this).css("color","rgba(249, 204, 178, 0.775)");
      },function(){
        $(this).css("color","rgb(245, 207, 185)");
      });

      $("#submit").css("background-color","rgba(148, 109, 79)");
      $("#submit").css("color","rgb(245, 207, 185)");
      $("#submit").css("border-color","rgb(245, 207, 185)");

});
}