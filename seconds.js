let twentySecondsBtn=document.getElementById("twentySecondsBtn")
let thirtySecondsBtn=document.getElementById("thirtySecondsBtn")
let fortySecondsBtn=document.getElementById("fortySecondsBtn")
let oneMinuteBtn=document.getElementById("oneMinuteBtn")
let timerText=document.getElementById("timerText")

let setFunction;
let seconds=0
function clearTimer(){
    clearInterval(setFunction)
}
function setTimer(){
        timerText.textContent=seconds+" seconds left" 
        setFunction=setInterval(function(){
            if (seconds>1){
            seconds=seconds-1
            timerText.textContent=seconds+" seconds left" 
            }
            else {
                clearInterval(setFunction)
            timerText.textContent="your moment is complete"
            
            }
        
    },1000)
}



twentySecondsBtn.addEventListener("click",function(){
    seconds=20
   clearTimer()
   setTimer()
})
thirtySecondsBtn.addEventListener("click",function(){
    seconds=30
   clearTimer()
   setTimer()
})
fortySecondsBtn.addEventListener("click",function(){
    seconds=40
   clearTimer()
   setTimer()
})
oneMinuteBtn.addEventListener("click",function(){
    seconds=60
   clearTimer()
   setTimer()
})


