function printTime() {
    let date = new Date()
    let weekday = new Array(7)
    weekday[0] = "Sunday"
    weekday[1] = "Monday"
    weekday[2] = "Tuesday"
    weekday[3] = "Wednesday"
    weekday[4] = "Thursday"
    weekday[5] = "Friday"
    weekday[6] = "Saturday"
    document.getElementById("time").innerHTML=date.getMonth() + "月" + date.getDay() + "日  " + date.getHours()+1 + ":" + date.getMinutes() + ":" + date.getSeconds() + "  " + weekday[date.getDay()]
    setTimeout(printTime, 1000)
}
