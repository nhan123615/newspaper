


$(document).ready(function(){

/* add class hover img */
    $(".post-entry-1").addClass("hovereffect");
    $(".img-bg").addClass("hovereffect");
    $(".thumbnail").addClass("hovereffect");   

/* add class hover img */

function hover(classImg, hoverClass){
    $(classImg).mouseover(function(){
        $(hoverClass).css({
            'opacity' : '0.3',        
            '-webkit-transition': '.3s all ease',
            '-o-transition': '.3s all ease',
             'transition': '.3s all ease',
            
        })
    }).mouseout(function() {
            $(hoverClass).css({
                'opacity' : '0',
                '-webkit-transition': '.3s all ease',
                '-o-transition': '.3s all ease',
                 'transition': '.3s all ease'
            })
        });
}

/* hover prev,next */

hover(".hero-slide",".owl-slide-3 .owl-nav .owl-prev, .owl-slide .owl-nav .owl-prev, .owl-style .owl-nav .owl-prev")

hover(".hero-slide",".owl-slide-3 .owl-nav .owl-next, .owl-slide .owl-nav .owl-next, .owl-style .owl-nav .owl-next")
/* hover prev,next  end*/





/* hoverImg(".half-post-entry img"," .half-post-entry  .contents h2 a")
hoverImg(".post-entry-1 img","  .post-entry-1 h2 a")
hoverImg(".post-entry-2 img","  .post-entry-2 > h2 a") */




/* $(".half-post-entry img").mouseover(function(){
    $(" .half-post-entry  .contents h2 a").css({
        '-webkit-transition' : '.3s all ease',
        '-o-transition': '.3s all ease',
        'transition': ' .3s all ease',
        'color': '#8bc34a'
    })
}).mouseout(function() {
        $(" .half-post-entry  .contents h2 a").css({
            'color': '#000'
        })
    }); */






})






