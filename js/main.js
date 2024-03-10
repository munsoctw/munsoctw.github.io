let main_left = document.getElementById("main_cover_left");
let main_right = document.getElementById("main_cover_right");

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
   
    console.log("value:" +value);
    main_left.style.marginLeft = value*-1.2 + 'px';
    main_right.style.marginRight = value*-1.2 + 'px';

})

