let bring_img = document.getElementById("bring_img");
let cities_counts = document.getElementById("cities_count");
let participants_counts = document.getElementById("participants_count");
let joined_counts = document.getElementById("joined_count");
let valueDisplays_city = document.querySelectorAll(".cal_city");
let valueDisplays_participants = document.querySelectorAll(".cal_parts");
let valueDisplays_joined = document.querySelectorAll(".cal_joined");
// let valueDisplays_city = document.getElementById("cities_count");
// let valueDisplays_participants = document.getElementById("participants_count");

let interval_city = 2000;
let interval_parts = 1;
let interval_joined = 2000;

let Harvard_WMUN = document.getElementById("Harvard-WMUN");
let HWMUN_coord = Harvard_WMUN.getBoundingClientRect();

let fresh_time = 0;


//  console.log(HWMUN_coord);
//  console.log(HWMUN_coord.top);
 console.log(window.screen.height);

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
   
    console.log("value:" +value);
    if( value<window.screen.height*0.8 ){
        bring_img.style.marginRight = value*1.4 + 'px';
    }
    bring_img.style.marginTop = value*0.05 + 'px';

    
    if(value > (window.screen.height)*1.5 && value < (window.screen.height)*1.6 && fresh_time==0){
        fresh_time += 1;
        valueDisplays_city.forEach(valueDisplay => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            // console.log(endValue);
            let duration = Math.floor(interval_city / endValue);
            let counter = setInterval(function (){
                startValue +=1;
                valueDisplay.textContent = startValue;
                if(startValue == endValue){
                    clearInterval(counter);
                }
            },duration);
            // console.log(valueDisplay);
        });

        valueDisplays_participants.forEach(valueDisplay => {
            let startValue = 29500;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            // console.log(endValue);
            let duration = Math.floor(interval_parts / endValue);
            let counter = setInterval(function (){
                startValue +=1;
                valueDisplay.textContent = startValue;
                if(startValue == endValue){
                    clearInterval(counter)
                }
            },duration);
        });

        valueDisplays_joined.forEach(valueDisplay => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            // console.log(endValue);
            let duration = Math.floor(interval_joined / endValue);
            let counter = setInterval(function (){
                startValue +=1;
                valueDisplay.textContent = startValue;
                if(startValue == endValue){
                    clearInterval(counter)
                }
            },duration);
        });
    }
})

