function bold(){
    document.getElementById("mytext").style.fontWeight="bold";
}
function itallic(){
    document.getElementById("mytext").style.fontStyle="italic";
}
function underline1(){
    document.getElementById("mytext").style.textDecoration="underline";
}
function size1(){
    document.getElementById("mytext").style.fontSize = document.getElementById("one").value;
}
function text1(){
    document.getElementById("mytext").style.fontFamily= document.getElementById("two").value;
}
$(".pics1").mouseover(function(){
    $(this).animate({opacity:0.5});
    $(this).css({'background-color':'black'});
    

});
/*$(".pic1").mouseleave(function(){
$(this).animate({opacity:"1"});
alert("hello");
})*/

$(".pics1").hover(function(){
    $(this).animate({"opacity":".5"})
},function(){
    $(this).animate({"opacity":"1"});
})

$(".pic2").hover(function(){
    $(this).animate({"opacity":".5"})
},function(){
    $(this).animate({"opacity":"1"});
})

$(".pic3").hover(function(){
    $(this).animate({"opacity":".5"})
},function(){
    $(this).animate({"opacity":"1"});
})
$(".pic4").hover(function(){
    $(this).animate({"opacity":".5"})
},function(){
    $(this).animate({"opacity":"1"});
})
$(".pic5").hover(function(){
    $(this).animate({"opacity":".5"})
},function(){
    $(this).animate({"opacity":"1"});
})
$(".pic6").hover(function(){
    $(this).animate({"opacity":".5"})
},function(){
    $(this).animate({"opacity":"1"});
})
$(".pic7").hover(function(){
    $(this).animate({"opacity":".5"})
},function(){
    $(this).animate({"opacity":"1"});
})
$(".pic8").hover(function(){
    $(this).animate({"opacity":".5"})
},function(){
    $(this).animate({"opacity":"1"});
})
$(".pic9").hover(function(){
    $(this).animate({"opacity":".5"})
},function(){
    $(this).animate({"opacity":"1"});
})


