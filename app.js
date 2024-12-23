let red=document.querySelector(".red");
let green=document.querySelector(".green");
let orange=document.querySelector(".orange");
let blue=document.querySelector(".blue");
let banner=document.querySelector(".war");
let heading=document.querySelector("h3");
let started=false;
let level=0;
let gameseq=[];
let user=[];
let col=["red","green","orange","blue"];




function start_(){
banner.remove();
heading.innerText=`Level ${level}`;
if(started==false){
   started=true;
   console.log("game is started");
   levelup();
}
}

function flash(btn){
 btn.classList.add("flash");
 setTimeout(function(){
    btn.classList.remove("flash");
 },500);
}

function arrayEqual(arr1,arr2){
    if(arr1.length!=arr2.length){
        return false;
    }else{
        for(let i=0;i<arr1.length;i++){
            if(arr1[i]!=arr2[i]){
                return false;
            }
        }
        return true;
    }
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500)
}
function checkans(idx){
    if(user[idx]===gameseq[idx]){
        if(user.length==gameseq.length){
            setTimeout(levelup, 1000);
        }
    }else{
        heading.innerText=`Gameover your score is: ${level}\n press any button to start`;
        document.querySelector("body").classList.add("redbg");
        setTimeout(() => {
            document.querySelector("body").classList.remove("redbg");
        }, 500);
        reset();
        
    }

}
function levelup(){
    user=[];
    level++;
    heading.innerText=`level ${level}`;
    let randomindx=Math.floor(Math.random()*4);
    let randcolor=col[randomindx];
    let btn=document.querySelector(`.${randcolor}`);
    flash(btn);
    gameseq.push(randcolor);
    console.log(gameseq);
}
function btnpressed(){
        userflash(this);
        user.push(this.classList[1]);
        checkans(user.length-1);
}





document.addEventListener("keypress",start_);
let attbtns=document.querySelectorAll(".box");
console.log(attbtns);
for(box of attbtns){
    box.addEventListener("click",btnpressed);
}

function reset(){
    started=false;
    gameseq=[];
    user=[];
    level=0;
}