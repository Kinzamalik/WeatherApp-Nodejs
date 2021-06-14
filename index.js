// 26101fa61746bcab8ec309c6f0c49f2c

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
    console.log(weekday[currentTime.getDay()])
};

getCurrentDay()

