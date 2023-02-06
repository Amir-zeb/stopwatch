var min = 0;
var sec = 0;
var msec = 0;

var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var msecheading = document.getElementById("msec");

var interval;

function timer() {
    msec++;
    msecheading.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        secheading.innerHTML = sec;
        msec = 0;
    }
    else if (sec >= 60) {
        min++;
        minheading.innerHTML = min;
        sec = 0;
    }
}

function start() {
    interval = setInterval(timer, 10)
}

function pause() {
    clearInterval(interval);
}

function startPause() {
    var currentvalue = document.getElementById('startPause');
    if (currentvalue.innerHTML == "Start") {
        currentvalue.innerHTML = "Pause";
        start();
        document.getElementById('save').disabled = true;
        document.getElementById('reset').disabled = true;
    } else if (currentvalue.innerHTML == "Pause") {
        currentvalue.innerHTML = "Start";
        pause();
        document.getElementById('reset').disabled = false;
        document.getElementById('save').disabled = false;
    }
}

function reset() {
    min = 0;
    sec = 0;
    msec = 0;

    minheading.innerHTML = min;
    secheading.innerHTML = sec;
    msecheading.innerHTML = msec;
    pause();
}

function save() {

    var setlap = document.getElementById("savetime");
    //Create a new list item when clicking on the "Add" button
    var li = document.createElement("li");
    var getlap = document.createTextNode(min + " : " + sec + " : " + msec);
    var a = document.createElement("a")
    a.setAttribute("type", "button")
    a.setAttribute("class", "fas fa-times closeIcon")
    a.setAttribute("onclick", 'removeLi(this)')
    li.appendChild(getlap);
    li.appendChild(a)
    setlap.appendChild(li)
}

const removeLi = (e) => {
    var node = e.parentElement.remove()
    return node
}
