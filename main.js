import './style.css'
let startingSecs = {
    white: 0,
    black: 0
} ;
let [seconds, minutes, hours] = [0,0,0];
let [seconds1, minutes1, hours1] = [0,0,0];
let displayTime = document.getElementById("displayTime")
let displayTime1 = document.getElementById("displayTime1")
let timer = {};
let active = {
    w: null,
    b: null
}


function myFunction() {
  let person = prompt("Please enter your time");
  if (person != null) {
    startingSecs.white = person * 60
    startingSecs.black = person * 60
    showTime()
  }
}

function showTime() {
    hours = Math.floor(startingSecs.white/3600)
    minutes = Math.floor((startingSecs.white%3600)/60)
    seconds = (startingSecs.white % 3600) % 60
    hours1 = Math.floor(startingSecs.black/3600)
    minutes1 = Math.floor((startingSecs.black%3600)/60)
    seconds1 = (startingSecs.black % 3600) % 60
    displayTime.innerText = hours + '.' + minutes + '.' + seconds 
    displayTime1.innerText = hours1 + '.' + minutes1 + '.' + seconds1 
}


function count(clr) {
    showTime()
    timer[clr] = setInterval(() => {
        startingSecs[clr]--;
        showTime()
        if(startingSecs[clr] == 0) {
            clearInterval(timer[clr]);
            var mp3_url = 'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3';
            (new Audio(mp3_url)).play()
        }
        
    }, 1000 )
}

set.onclick = () =>{
    myFunction()
    active = 'w'
    count('white')
}
pause.onclick = ()=> {
    if (active == 'w') {
    clearInterval(timer['white']);
    }else{
    clearInterval(timer['black']);
    }
    document.getElementById('pause').innerText = 'start';
}
pause.ondblclick =()=>{
    if (active == 'w') {
        count('white')
    }else{
        count('black')
    }
    document.getElementById('pause').innerText = 'pause';

}



player1.onclick = () => {
    if (active == 'w') {
        active = 'b'
    // pause timer
        clearInterval(timer['white'])
        // start other
             count('black')
    }
       
}

player2.onclick = () => {
    if (active == 'b') {
        active = 'w'
         // pause timer
         clearInterval(timer['black'])
         // start other
              count('white')
    }
   
}






