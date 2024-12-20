let numbs = document.getElementById('num')
let counting = 0;
setInterval(() => {
    if(counting == 98){
        clearInterval();
    }else{
        counting += 1; 
        num.innerHTML = counting + "%";
    }
   
},
10

);
