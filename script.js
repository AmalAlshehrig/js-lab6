let stopButton=document.getElementById("stopButton")
let slowButton=document.getElementById("slowButton")
let goButton=document.getElementById("goButton")
let redd=document.getElementById("stopLight")
let yalloww=document.getElementById("slowLight")
let greenn=document.getElementById("goLight")
function clearLights(){
    redd.style.backgroundColor='black'
    yalloww.style.backgroundColor='black'
    greenn.style.backgroundColor='black'
}

    stopButton.addEventListener("click",function redlite(){
        clearLights();
    redd.style.backgroundColor='red'
})

    slowButton.addEventListener("click",function yallowlite(){
         clearLights();
    yalloww.style.backgroundColor='yellow'

})

    goButton.addEventListener("click",function rgreenlite(){
        clearLights();
    greenn.style.backgroundColor='green'
        
})