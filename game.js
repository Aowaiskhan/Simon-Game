function randomNumberGenerator(){
    var rand = Math.random();
    rand = Math.floor(rand*4);
    return rand;
}

colors = ["green","red","yellow","blue"];

ColorPattern = [];
userColorPattern=[];

var level = 0;
var started = false;

$(document).on("keypress",function(){
    if(!started){
        Generator();
        started = true;
    }
});

function checkAnswer(currLevel){
    if(ColorPattern[currLevel] == userColorPattern[currLevel]){
        if(ColorPattern.length==userColorPattern.length){
            setTimeout(function(){
                Generator();
            },800);
        }
    }
    else{
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },100)
        playSound("wrong");
        $("h1").text("Game over, Press any key to Restart")

        Restart();
    }
}

$(".btn").on("click",function(){
    var buttonID = this.id;
    userColorPattern.push(buttonID);
    pressAnimate(buttonID);
    playSound(buttonID);
    checkAnswer(userColorPattern.length - 1);
})

function Generator(){
    userColorPattern = [];
    level++;
    $("h1").text("level "+level);
    var colorgenerated = colors[randomNumberGenerator()];
    pressAnimate(colorgenerated);
    playSound(colorgenerated);
    ColorPattern.push(colorgenerated);
}

// $("body").on("keypress",function(){
//     var i=1;
//     let ch1 = Gen(i);    
//     let ch2 = btnPressed();
//     alert(ch1);
//     alert(ch2);
//     while(ch1==ch2){
//         i++;
//         Gen(i);
//     }
//     $(h1).text("GAME OVER");
// })

// function Gen(i){
//     $("h1").text("level "+i);
//     let str = colorgenerated;
//     colorpattern.push(str);
//     var audio = new Audio("sounds/"+str+".mp3");
//     audio.play();
//     $("."+str).addClass("pressed");
//     setTimeout(function(){
//         $("."+str).removeClass("pressed")
//     },50);
//     return str;
// }

 

// function btnPressed(){
//     $(".btn").on("click",function(){
//         var buttonID = this.id;
//         var redaudio = new Audio("sounds/"+buttonID+".mp3");
//         redaudio.play();
//         $("."+buttonID).addClass("pressed");
//         setTimeout(function(){
//             $("."+buttonID).removeClass("pressed")
//         },50);
//     });
//     return buttonID;
// }

// function redPressed(){
//     $(".red").on("click",function(){
//         var redaudio = new Audio("sounds/red.mp3");
//         redaudio.play();
//         $(".red").addClass("pressed");
//         setTimeout(function(){
//             $(".red").removeClass("pressed")
//         },50);   
//     });
// }

// function greenPressed(){
//     $(".green").on("click",function(){
//         var greenaudio = new Audio('sounds/green.mp3');
//         greenaudio.play();
//         $(".green").addClass("pressed");
//         setTimeout(function(){
//             $(".green").removeClass("pressed")
//         },50);   
//     });
// }

// function bluePressed(){
//     $(".blue").on("click",function(){
//         var blueaudio = new Audio("sounds/blue.mp3");
//         blueaudio.play();
//         $(".blue").addClass("pressed");
//         setTimeout(function(){
//             $(".blue").removeClass("pressed")
//         },50);   
//     });
// }


// function yellowPressed(){
//     $(".yellow").on("click",function(){
//         var yellowaudio = new Audio("sounds/yellow.mp3");
//         yellowaudio.play();
//         $(".yellow").addClass("pressed");
//         setTimeout(function(){
//             $(".yellow").removeClass("   pressed")
//         },50);   
//     });
// }

function pressAnimate(str){
    $("#"+str).addClass("pressed");
    setTimeout(function(){
        $("#"+str).removeClass("pressed");
    },50);
}

function playSound(str){
    var audio = new Audio("sounds/"+str+".mp3");
    audio.play();
}

function Restart(){
    started = false;
    level=0;
    ColorPattern = [];
    userColorPattern = [];
}


