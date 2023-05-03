let hr = document.getElementById("h");
let mnt = document.getElementById("m");
let sec = document.getElementById("s");

let displaytime = () => {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    
    let hrotate = 30*hh + mm/2;
    let mrotate = 6*mm;
    let srotate = 6*ss;

    hr.style.transform = `rotate(${hrotate}deg)`;
    mnt.style.transform = `rotate(${mrotate}deg)`;
    sec.style.transform = `rotate(${srotate}deg)`;
}

setInterval(displaytime, 1000);