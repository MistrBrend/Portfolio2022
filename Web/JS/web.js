window.onscroll = function() {scrollFunction();}

// scroll function
function scrollFunction(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

        // Transitions when scrolling
        document.getElementById("header").style.transition = "0.8s";
        document.getElementById("title").style.transition = "0.8s";
        document.getElementById("link1").style.transition = "1s";
        document.getElementById("link2").style.transition = "1s";
        document.getElementById("link3").style.transition = "1s";


        // padding/fontsize when scrolling
        document.getElementById("header").style.padding = "1%";
        document.getElementById("title").style.fontSize = "1.875rem";
        document.getElementById("link1").style.fontSize = "1.4rem";
        document.getElementById("link2").style.fontSize = "1.4rem";
        document.getElementById("link3").style.fontSize = "1.4rem";

    } else {

        // styles when scrolling back to the top
        document.getElementById("header").style.padding = "2%";
        document.getElementById("title").style.fontSize = "2.188rem";
        document.getElementById("link1").style.fontSize = "1.563rem";
        document.getElementById("link2").style.fontSize = "1.563rem";
        document.getElementById("link3").style.fontSize = "1.563rem";

    }
}