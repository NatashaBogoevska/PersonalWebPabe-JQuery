/*var prva;
var vtora;
var treta;
var sprva;
var svtora;
var streta;

window.addEventListener("load",start,false);

function start()
{
    prva=document.getElementById("img1");
    vtora=document.getElementById("img2");
    treta=document.getElementById("img3");

    sprva=document.getElementById("s1");
    svtora=document.getElementById("s2");
    streta=document.getElementById("s3");

    prva.addEventListener("click",movie1,false);
    vtora.addEventListener("click",movie2,false);
    treta.addEventListener("click",movie3,false);

    sprva.addEventListener("click",serie1,false);
    svtora.addEventListener("click",serie2,false);
    streta.addEventListener("click",serie3,false);
}

function movie1(){
    window.alert("Mia meets with a terrible accident on her way to her"+
    " grandparents' house. Although Mia slips into a coma,"+
    " she has an out-of-body experience and realises that"+
    " she has to make a life-altering choice.");
}

function movie2()
{
    window.alert("When Earth becomes uninhabitable in the future, a"+
    " farmer and ex-NASA pilot, Joseph Cooper, is tasked"+
    " to pilot a spacecraft, along with a team of"+
    " researchers, to find a new planet for humans.")
}

function movie3()
{
    window.alert("Spider-Man seeks the help of Doctor Strange to forget"+
    " his exposed secret identity as Peter Parker. However,"+
    " Strange's spell goes horribly wrong, leading to"+
    " unwanted guests entering their universe.")
}

function serie1()
{
    window.alert("Annalise Keating, a criminal defence lawyer and"+
    " professor, teaches a group of aspiring law students."+
    " However, their lives alter when they get entangled in"+
    " an aberrant murder.");
}

function serie2()
{
    window.alert("Lucifer Morningstar, bored from his sulking life in hell, comes to live in Los Angeles. While"+
    " there, he helps humanity with its miseries through his experience and telepathic abilities"+
    " to bring people's deepest desires and thoughts out of them. While meeting with a"+
    " Detective in his nightclub (Lux), a shootout involving him and the Detective leads him to"+
    " become an LAPD consultant who tries to punish people for their crimes through law and"+
    " justice.");
}

function serie3()
{
    window.alert("Shaun Murphy, a young surgeon with autism and savant syndrome, relocates from a quiet"+
    " country life to join a prestigious hospital’s surgical unit. Alone in the world and unable to"+
    " personally connect with those around him, Shaun uses his extraordinary medical gifts to"+
    " save lives and challenge the skepticism of his colleagues.");
}*/
window.onload=function(){

    $(document).ready(function(){

    $("#img1").click(function(){
        alert("Mia meets with a terrible accident on her way to her"+
        " grandparents' house. Although Mia slips into a coma,"+
        " she has an out-of-body experience and realises that"+
        " she has to make a life-altering choice.");
    });

    $("#img2").click(function(){
        alert("When Earth becomes uninhabitable in the future, a"+
        " farmer and ex-NASA pilot, Joseph Cooper, is tasked"+
        " to pilot a spacecraft, along with a team of"+
        " researchers, to find a new planet for humans.");
    });

    $("#img3").click(function(){
        alert("Spider-Man seeks the help of Doctor Strange to forget"+
        " his exposed secret identity as Peter Parker. However,"+
        " Strange's spell goes horribly wrong, leading to"+
        " unwanted guests entering their universe.");
    });

    $("#s1").click(function(){
        alert("Annalise Keating, a criminal defence lawyer and"+
        " professor, teaches a group of aspiring law students."+
        " However, their lives alter when they get entangled in"+
        " an aberrant murder.");
    });

    $("#s2").click(function(){
        alert("Lucifer Morningstar, bored from his sulking life in hell, comes to live in Los Angeles. While"+
        " there, he helps humanity with its miseries through his experience and telepathic abilities"+
        " to bring people's deepest desires and thoughts out of them. While meeting with a"+
        " Detective in his nightclub (Lux), a shootout involving him and the Detective leads him to"+
        " become an LAPD consultant who tries to punish people for their crimes through law and"+
        " justice.");
    });

    $("#s3").click(function(){
        alert("Shaun Murphy, a young surgeon with autism and savant syndrome, relocates from a quiet"+
        " country life to join a prestigious hospital’s surgical unit. Alone in the world and unable to"+
        " personally connect with those around him, Shaun uses his extraordinary medical gifts to"+
        " save lives and challenge the skepticism of his colleagues.");
    });

});

}