// 26101fa61746bcab8ec309c6f0c49f2c
// 
// api.openweathermap.org/data/2.5/weather?q=Pune&appid=26101fa61746bcab8ec309c6f0c49f2c


const curDate = document.getElementById('date');
let weatherIcon = document.getElementById("weathericon");


const tempStatus = "Clouds"; 

const getCurrentDay= () =>{
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentTime = new Date();
    let day= weekday[currentTime.getDay()];
    return day;
};

// getCurrentDay()


const getCurrentTime = () => {

    var months =[
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",

    ];



    var now = new Date();
    var month = months[ now.getMonth() + 1];
    var date = now.getDate();

    let hours = now.getHours();
    let mins = now.getMinutes();
    let period = "Am";

    if(hours > 11){
        period = "PM";
        if(hours > 12) hours -= 12;
    } if(mins < 10){
        mins = "0" + mins;
    }

    return `${month}  ${date} | ${hours}:${mins}${period}`;
    // console.log(month + "/" + day)

}

curDate.innerHTML =  getCurrentDay() + "|" + getCurrentTime();





















