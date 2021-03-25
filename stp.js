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
    } else if (currentvalue.innerHTML == "Pause") {
        currentvalue.innerHTML = "Start";
        pause();
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
    //var inputValue = document.write(min + " : " + sec + " : " + msec);
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







// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.write(min+" : "+sec+" : "+msec);
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   document.getElementById("myUL").appendChild(li)

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }