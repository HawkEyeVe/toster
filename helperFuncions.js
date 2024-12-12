export function timer(timeleft) {
    let downloadTimer = setInterval(function(){
     if(timeleft === 0){
       clearInterval(downloadTimer);
       console.log('done');
     }
     console.log(timeleft);
     timeleft -= 1;
   }, 1000);
 }
   

