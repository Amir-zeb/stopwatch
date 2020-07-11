var min=0;
var sec=0;
var msec=0;

var minheading=document.getElementById("min");
var secheading=document.getElementById("sec");
var msecheading=document.getElementById("msec");

var interval;

function timer(){
    msec++;
    msecheading.innerHTML=msec;
    if(msec>=100){
        sec++;
        secheading.innerHTML=sec;
        msec=0;
    }
    else if(sec>=5){
        min++;
        minheading.innerHTML=min;
        sec=0;
    }
}

function start(){
    interval=setInterval(timer,10)
}

function pause(){
    clearInterval(interval);
}

function ready(){
    if($('#stpbutton').children('span').hasClass('start')){
        interval=setInterval(timer,10);
        $('#stpbutton').children('span').removeClass('start');
        $('#stpbutton').children('span').addClass('pause');
        }
        else if($('#stpbutton').children('span').hasClass('pause')){
        clearInterval(interval);
        $('#stpbutton').children('span').removeClass('pause');
        $('#stpbutton').children('span').addClass('start');
        }
}

function reset(){
    var min=0;
    var sec=0;
    var msec=0;

    minheading.innerHTML=min;
    secheading.innerHTML=sec;
    msecheading.innerHTML=msec;
    pause();
}



{/* <script>
        $(document).ready(function(){
            $("#mycarousel").carousel( { interval: 2000 } );
            $("#carouselButton").click(function(){
                if($('#carouselButton').children('span').hasClass('fa-pause')){
                $("#mycarousel").carousel('pause');
                $('#carouselButton').children('span').removeClass('fa-pause');
                $('#carouselButton').children('span').addClass('fa-play');
                }
                else if($('#carouselButton').children('span').hasClass('fa-play')){
                $("#mycarousel").carousel('cycle');
                $('#carouselButton').children('span').removeClass('fa-play');
                $('#carouselButton').children('span').addClass('fa-pause');
                }
            });
        });
    </script> */}