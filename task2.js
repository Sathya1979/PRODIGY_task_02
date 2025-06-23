let startt=0;
let elapset=0;
let interval=null;
let lapc=1;

function Display(){
    const time=new Date(elapset);
    const minutes=time.getUTCMinutes().toString().padStart(2,'0');
    const seconds=time.getUTCSeconds().toString().padStart(2,'0');
    const milliseconds=Math.floor(time.getUTCMilliseconds()/10).toString().padStart(2,'0');
    document.getElementById("display").textContent = `${minutes}:${seconds}:${milliseconds}`;
}
function start(){
    if(!interval){
        startt=Date.now() - elapset;
        interval=setInterval(()=>{
            elapset=Date.now()-startt;
            Display();
        },10);
    }
}
function stop(){
    clearInterval(interval);
    interval=null;
}
function reset() {
    clearInterval(interval);
    interval = null;
    elapset = 0;
    lapc=1;
    document.getElementById("laps").innerHTML = "";
    Display();
  }
  function lap(){
    const time = new Date(elapset);
    const minutes = time.getUTCMinutes().toString().padStart(2, '0');
    const seconds = time.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = Math.floor(time.getUTCMilliseconds() / 10).toString().padStart(2, '0');
    const laptime = `${minutes}:${seconds}:${milliseconds}`;
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapc++}: ${laptime}`;
    document.getElementById("laps").appendChild(lapItem);
  }
  
