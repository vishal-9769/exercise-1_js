let timerid;
let ti;
let h = "0" + "0";
let m = "0" + "0";
let sec = "0" + "0";
let ms = "0" + "0";
let mnth;

function run() {
    ms++
    if (ms == 100) {
        sec++
        ms = 00;
    }
    if (sec == 60) {
        m++;
        sec = 00;
    }
    if (m == 60) {
        h++;
        m = 00;
    }
    if (h == 24) {
        h = 00;
    }
    let output = h + ":" + m + ":" + sec + ":" + ms;
    document.getElementById("stopwatch").innerHTML = output;

}
function clk() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;


    let st = "Time :" + hours + ":" + mins + ":" + secs;

    document.getElementById("clock").innerHTML = st;
}
function clock() {
    ti = setInterval(clk, 1000);
  
}

function start() {
    timerid = setInterval(run, 10);
    document.getElementById("start").innerHTML="Resume";
    document.getElementById("start").disabled=true;
    //console.log(timerid);
}

function stop() {
    clearInterval(timerid);
    
    document.getElementById("start").disabled = false;


}

function reset() {
    h = "0" + "0";
    m = "0" + "0";
    sec = "0" + "0";
    ms = "0" + "0";
    let rt = h + ":" + m + ":" + sec + ":" + ms;

    document.getElementById("stopwatch").innerHTML = rt;
    document.getElementById("start").innerHTML = "Start";
    document.getElementById("start").disabled = false;
    clearInterval(timerid);

}

function dt() {
    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth();
    let y = d.getFullYear();

    let ar=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    mnth=ar[month];
   
    let today = "Date :" + " " + day + "-" + mnth + "-" + y
    document.getElementById("date").innerHTML = today;
}

