var luffyimg = document.getElementById("luffy")
var luffyleftimg = document.getElementById("luffyleft")
var luffyrightimg = document.getElementById("luffyright")
var luffydown = document.getElementById("luffyboth")
var bongoimg = document.getElementById("bongo")
var cowbellimg = document.getElementById("cowbell")
var cymbalimg = document.getElementById("cymbal")
var tambourineimg = document.getElementById("tambourine")
var keyboardimg = document.getElementById("keyboard")
var marimbaimg = document.getElementById("marimba")


// Sounds
const bongoleft = new Audio("./sounds/bongo0.mp3");
const bongoright = new Audio("./sounds/bongo1.mp3");
const cowbell = new Audio("./sounds/cowbell.mp3");
const cymbalsound = new Audio("./sounds/cymbal.mp3");
const tambourinesound = new Audio("./sounds/tambourine.mp3");
const marimbq = new Audio("./sounds/marimba0.mp3");
const marimbw = new Audio("./sounds/marimba1.mp3");
const marimbe = new Audio("./sounds/marimba2.mp3");
const marimbr = new Audio("./sounds/marimba3.mp3");
const marimbt = new Audio("./sounds/marimba4.mp3");
const marimby = new Audio("./sounds/marimba5.mp3");
const marimbu = new Audio("./sounds/marimba6.mp3");
const marimbi = new Audio("./sounds/marimba7.mp3");
const marimbo = new Audio("./sounds/marimba8.mp3");
const marimbp = new Audio("./sounds/marimba9.mp3");
const keyboard1 = new Audio("./sounds/keyboard1.mp3");
const keyboard2 = new Audio("./sounds/keyboard2.mp3");
const keyboard3 = new Audio("./sounds/keyboard3.mp3");
const keyboard4 = new Audio("./sounds/keyboard4.mp3");
const keyboard5 = new Audio("./sounds/keyboard5.mp3");
const keyboard6 = new Audio("./sounds/keyboard6.mp3");
const keyboard7 = new Audio("./sounds/keyboard7.mp3");
const keyboard8 = new Audio("./sounds/keyboard8.mp3");
const keyboard9 = new Audio("./sounds/keyboard9.mp3");
const keyboard0 = new Audio("./sounds/keyboard0.mp3");
const luffysound = new Audio("./sounds/LuffyLaugh.mp3");






document.addEventListener("keydown",(e)=>{
    if (e.key=="a"){
        luffyimg.style.display = "none";
        luffyleftimg.style.display = "none";
        luffyrightimg.style.display = "block";
        luffydown.style.display = "none";
        bongoimg.style.display = "block"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "none";
        keyboardimg.style.display = "none";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "none";
        bongoleft.play();
        bongoleft.currentTime = 0;
    }
    if (e.key=="d"){
       luffyimg.style.display = "none";
        luffyleftimg.style.display = "block";
        luffyrightimg.style.display = "none";
        luffydown.style.display = "none";
        bongoimg.style.display = "block"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "none";
        keyboardimg.style.display = "none";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "none";
        bongoright.play();
        bongoright.currentTime = 0;
    }
    if (e.key=="c"){
        luffyimg.style.display = "none";
        luffyleftimg.style.display = "block";
        luffyrightimg.style.display = "none";
        luffydown.style.display = "none";
        bongoimg.style.display = "none"
        cymbalimg.style.display = "block"
        marimbaimg.style.display = "none";
        keyboardimg.style.display = "none";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "none";
        cymbalsound.play()
        cymbalsound.currentTime = 0;
    }
    if (e.key=="f"){
       luffyimg.style.display = "none";
        luffyleftimg.style.display = "block";
        luffyrightimg.style.display = "none";
        luffydown.style.display = "none";
        bongoimg.style.display = "none"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "none";
        keyboardimg.style.display = "none";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "block";
        cowbell.play()
        cowbell.currentTime = 0;
    }
if (e.key=="b"){
       luffyimg.style.display = "none";
        luffyleftimg.style.display = "block";
        luffyrightimg.style.display = "none";
        luffydown.style.display = "none";
        bongoimg.style.display = "none"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "none";
        keyboardimg.style.display = "none";
        tambourineimg.style.display = "block";
        cowbellimg.style.display = "none";
        tambourinesound.play()
        tambourinesound.currentTime = 0;
    }

    if (e.key=="q"){
       luffyimg.style.display = "none";
        luffyleftimg.style.display = "none";
        luffyrightimg.style.display = "block";
        luffydown.style.display = "none";
        bongoimg.style.display = "none"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "block";
        keyboardimg.style.display = "none";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "none";
        marimbq.play()
        marimbq.currentTime = 0;
    }


    if (e.key=="w"){
       luffyimg.style.display = "none";
        luffyleftimg.style.display = "none";
        luffyrightimg.style.display = "block";
        luffydown.style.display = "none";
        bongoimg.style.display = "none"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "block";
        keyboardimg.style.display = "none";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "none";
        marimbw.play()
        marimbw.currentTime = 0;
    }


    if (e.key=="e"){
       luffyimg.style.display = "none";
        luffyleftimg.style.display = "none";
        luffyrightimg.style.display = "block";
        luffydown.style.display = "none";
        bongoimg.style.display = "none"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "block";
        keyboardimg.style.display = "none";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "none";
        marimbe.play()
        marimbe.currentTime = 0;
    }


    if (e.key=="r"){
       luffyimg.style.display = "none";
        luffyleftimg.style.display = "none";
        luffyrightimg.style.display = "block";
        luffydown.style.display = "none";
        bongoimg.style.display = "none"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "block";
        keyboardimg.style.display = "none";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "none";
        marimbr.play()
        marimbr.currentTime = 0;rr
    }
    if (e.key=="t"){
       luffyimg.style.display = "none";
        luffyleftimg.style.display = "none";
        luffyrightimg.style.display = "block";
        luffydown.style.display = "none";
        bongoimg.style.display = "none"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "block";
        keyboardimg.style.display = "none";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "none";
        marimbt.play()
        marimbt.currentTime = 0;rr
    }
    if (e.key=="y"){
       luffyimg.style.display = "none";
        luffyleftimg.style.display = "block";
        luffyrightimg.style.display = "none";
        luffydown.style.display = "none";
        bongoimg.style.display = "none"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "block";
        keyboardimg.style.display = "none";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "none";
        marimby.play()
        marimby.currentTime = 0;rr
    }

    if (e.key=="u"){
       luffyimg.style.display = "none";
        luffyleftimg.style.display = "block";
        luffyrightimg.style.display = "none";
        luffydown.style.display = "none";
        bongoimg.style.display = "none"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "block";
        keyboardimg.style.display = "none";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "none";
        marimbu.play()
        marimbu.currentTime = 0;rr
    }

    if (e.key=="i"){
       luffyimg.style.display = "none";
        luffyleftimg.style.display = "block";
        luffyrightimg.style.display = "none";
        luffydown.style.display = "none";
        bongoimg.style.display = "none"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "block";
        keyboardimg.style.display = "none";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "none";
        marimbi.play()
        marimbi.currentTime = 0;rr
    }

    if (e.key=="o"){
       luffyimg.style.display = "none";
        luffyleftimg.style.display = "block";
        luffyrightimg.style.display = "none";
        luffydown.style.display = "none";
        bongoimg.style.display = "none"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "block";
        keyboardimg.style.display = "none";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "none";
        marimbo.play()
        marimbo.currentTime = 0;rr
    }

    if (e.key=="p"){
       luffyimg.style.display = "none";
        luffyleftimg.style.display = "block";
        luffyrightimg.style.display = "none";
        luffydown.style.display = "none";
        bongoimg.style.display = "none"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "block";
        keyboardimg.style.display = "none";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "none";
        marimbp.play()
        marimbp.currentTime = 0;
    }
    if (e.key=="1"){
       luffyimg.style.display = "none";
        luffyleftimg.style.display = "none";
        luffyrightimg.style.display = "block";
        luffydown.style.display = "none";
        bongoimg.style.display = "none"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "none";
        keyboardimg.style.display = "block";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "none";
        keyboard1.play()
        keyboard1.currentTime = 0;
    }
    if (e.key=="2"){
       luffyimg.style.display = "none";
        luffyleftimg.style.display = "none";
        luffyrightimg.style.display = "block";
        luffydown.style.display = "none";
        bongoimg.style.display = "none"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "none";
        keyboardimg.style.display = "block";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "none";
        keyboard2.play()
        keyboard2.currentTime = 0;
    }
    if (e.key=="3"){
       luffyimg.style.display = "none";
        luffyleftimg.style.display = "none";
        luffyrightimg.style.display = "block";
        luffydown.style.display = "none";
        bongoimg.style.display = "none"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "none";
        keyboardimg.style.display = "block";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "none";
        keyboard3.play()
        keyboard3.currentTime = 0;
    }
    if (e.key=="4"){
       luffyimg.style.display = "none";
        luffyleftimg.style.display = "none";
        luffyrightimg.style.display = "block";
        luffydown.style.display = "none";
        bongoimg.style.display = "none"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "none";
        keyboardimg.style.display = "block";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "none";
        keyboard4.play()
        keyboard4.currentTime = 0;
    }
    if (e.key=="5"){
       luffyimg.style.display = "none";
        luffyleftimg.style.display = "none";
        luffyrightimg.style.display = "block";
        luffydown.style.display = "none";
        bongoimg.style.display = "none"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "none";
        keyboardimg.style.display = "block";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "none";
        keyboard5.play()
        keyboard5.currentTime = 0;
    }
    if (e.key=="6"){
       luffyimg.style.display = "none";
        luffyleftimg.style.display = "block";
        luffyrightimg.style.display = "none";
        luffydown.style.display = "none";
        bongoimg.style.display = "none"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "none";
        keyboardimg.style.display = "block";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "none";
        keyboard6.play()    
        keyboard6.currentTime = 0;
    }
    if (e.key=="7"){
       luffyimg.style.display = "none";
        luffyleftimg.style.display = "block";
        luffyrightimg.style.display = "none";
        luffydown.style.display = "none";
        bongoimg.style.display = "none"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "none";
        keyboardimg.style.display = "block";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "none";
        keyboard7.play()    
        keyboard7.currentTime = 0;
    }
    if (e.key=="8"){
       luffyimg.style.display = "none";
        luffyleftimg.style.display = "block";
        luffyrightimg.style.display = "none";
        luffydown.style.display = "none";
        bongoimg.style.display = "none"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "none";
        keyboardimg.style.display = "block";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "none";
        keyboard8.play()    
        keyboard8.currentTime = 0;
    }
    if (e.key=="9"){
       luffyimg.style.display = "none";
        luffyleftimg.style.display = "block";
        luffyrightimg.style.display = "none";
        luffydown.style.display = "none";
        bongoimg.style.display = "none"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "none";
        keyboardimg.style.display = "block";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "none";
        keyboard9.play()    
        keyboard9.currentTime = 0;
    }
    if (e.key=="0"){
       luffyimg.style.display = "none";
        luffyleftimg.style.display = "block";
        luffyrightimg.style.display = "none";
        luffydown.style.display = "none";
        bongoimg.style.display = "none"
        cymbalimg.style.display = "none"
        marimbaimg.style.display = "none";
        keyboardimg.style.display = "block";
        tambourineimg.style.display = "none";
        cowbellimg.style.display = "none";
        keyboard0.play()    
        keyboard0.currentTime = 0;
    }
    if (e.key==" "){
        luffysound.play();
        luffysound.currentTime = 0;
    }

    

})
document.addEventListener("keyup",(e)=>{
    if (e.key!=""){
        luffyimg.style.display = "block";
        luffyleftimg.style.display = "none";
        luffyrightimg.style.display = "none";
        luffydown.style.display = "none";
        // bongoimg.style.display = "none"
        // cymbalimg.style.display = "none"
        // marimbaimg.style.display = "none";
        // keyboardimg.style.display = "none";
        // tambourineimg.style.display = "none";
        // cowbellimg.style.display = "none";
    }
})
a