function createElement(element,id,appendto = null){ 
    let tags = document.createElement(element);
    tags.setAttribute('id',id);
    if(appendto){
        appendto.appendChild(tags);
    }
    return tags;
}

function tagsManipulation(){
    const mainDiv = createElement('div','mainDiv',document.body);
    const header =  createElement('h1','header',mainDiv);
    const toster = createElement('div','toster',mainDiv);
    const slider = createElement('input','timer',mainDiv);
    const btnLayer = createElement('div','btnLayer',mainDiv);
    slider.type = 'range';
    slider.min = 0;
    slider.max = 20;
    header.textContent = 'Toster Simulator';
    btnLayer.classList.add('btnLayer');
    const btnStart = createElement('p','btnStart',btnLayer);
    btnStart.textContent = 'Start';
    const btnStop = createElement('p','btnStop',btnLayer);
    btnStop.textContent = 'Stop';
    toster.style.backgroundColor = '#f4f0f0';
    const context = {
        slider,
        btnStart,
        btnStop,
    }
    return context;
}
let timeleft = 0
function timer(tosting) {
     downloadTimer = setInterval(function(){
     if(tosting === 0){
       clearInterval(downloadTimer);
       console.log('done');
       breading();
     }
     console.log(tosting);
     tosting -= 1;
     timeleft = tosting
   }, 1000);
 }

 function breading(){
    if (timeleft >= 15){
        toster.style.backgroundColor = '#6d3100';
    }else if (timeleft >= 10){
        toster.style.backgroundColor = '#bb702c';
    }else if (timeleft >= 5){
        toster.style.backgroundColor = '#e49d5c';
    }else{
        toster.style.backgroundColor = '#f5dba6';
    }
        
    }

        
   
function main(){
    const context = tagsManipulation();
    console.log(context);
    context.slider.addEventListener('input', function(event) {
        const sliderValue = event.target.value;
        console.log(sliderValue);
        return sliderValue
      });
    context.btnStart.addEventListener('click',function(){
        const tosting = context.slider.value
        timer(tosting);
    });
    context.btnStop.addEventListener('click',function(){
        clearInterval(downloadTimer);
        breading();
        console.log(`done ${timeleft}`);
        
    })
    
    
}

main();



