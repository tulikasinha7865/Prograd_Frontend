function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    var session = "AM";
    let date = new Date().toISOString().slice(0, 10)
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];
    m = checkTime(m);
    s = checkTime(s);
    if(h > 12){
        session = "PM";
    }
    document.getElementById('time').innerHTML =  h + ":" + m + ":" + s+ " " + session;
    document.getElementById('date').innerHTML = date +" " +day;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}