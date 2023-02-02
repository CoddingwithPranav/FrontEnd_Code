const selectMenu = document.querySelectorAll("select");
const Timeh1 = document.querySelector("h1");
const content = document.querySelector(".content")
const setAlarmbtn = document.getElementById('btn');



const ringTone = new  Audio("ringtone.mp3")
let isAlarmset = false;
let alarmTime;

for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend', option)
}
for (let i = 59; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend', option)
}
for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`
    selectMenu[2].firstElementChild.insertAdjacentHTML('afterend', option)
}

setInterval(() => {
    // getting time by new date 
    let date = new Date()
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    ampm = "AM";
    /// chaning 24 hours formate in 12 hours
    if (h >= 12) {

        h = h - 12;
        ampm = "PM"
    }
    //if h = 0 then change it into 12
    h = h == 0 ? h = 12 : h;
    //putting zero in front of single digit number to make look good
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    Timeh1.innerText = `${h}:${m}:${s} ${ampm}`

    if ( alarmTime == `${h}:${m}:${ampm}`) {
        console.log("Alarm ringing..")
        ringTone.play()
        ringTone.loop = true;
    }

}, 1000);

function setAlarm() {
    if(isAlarmset){
        alarmTime = ''
        ringTone.pause();
        content.classList.remove('disable');
        setAlarmbtn.innerText = " Set Alarm"
        setAlarmbtn.style.background = ' rgb(51, 255, 0)'

        return isAlarmset = false; 
    }
    let time = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value}`
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please ,select a valid time to set alarm")
    }
    alarmTime = time;
    isAlarmset = true;
    content.classList.add('disable')
    setAlarmbtn.style.background = 'red'
    setAlarmbtn.innerText = "Clear Alarm";
    console.log(isAlarmset)
};
setAlarmbtn.addEventListener("click", setAlarm);