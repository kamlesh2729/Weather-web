const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "de58e18b14mshd7c72e0c454ff6dp19d14bjsnf11f5f01fa56",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

//   const getlocation = () => {
//     if (navigator.geolocation) {
//       // this.getPosition();
//       navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//       alert("Geolocation is not supported by this browser");
//     }
//     function showPosition(position) {
//       lat.innerHTML = position.coords.latitude;
//       lon.innerHTML = position.coords.longitude;
//     }
  
//   };
// getlocation();

const getWeather = (city) => {
    cityname.innerHTML = city;
    locationname.innerHTML = city;
    fetch(url+city, options)
    .then((response) => response.json())
    .then((response) => {
        console.log(response)
        humidity.innerHTML = response.humidity
        max_temp.innerHTML = Math.round(response.max_temp)
        min_temp.innerHTML = Math.round(response.min_temp)
      temp.innerHTML = Math.round(response.temp);
      Temp.innerHTML = Math.round(response.temp);
      wind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
}

citySubmit.addEventListener("click", (e) => {
  e.preventDefault();
    getWeather(city.value)
    
    // getWeather("Mumbai")
})

getWeather("Mumbai")


function DigitalClock() {
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
  
  const Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];

  let Time = new Date();

  let HoursTime = Time.getHours();
  let MinutesTime = Time.getMinutes();
  let SecondsTime = Time.getSeconds();
  let AmorPm = document.getElementById("DigitalAmPm");

  if (HoursTime >= 12) {
    AmorPm.innerHTML = "PM";
  } else {
    AmorPm.innerHTML = "AM";
  }

  if (HoursTime > 12) {
    HoursTime = HoursTime - 12;
  }

  HoursTime = HoursTime < 10 ? "0" + HoursTime : HoursTime;
  MinutesTime = MinutesTime < 10 ? "0" + MinutesTime : MinutesTime;
  SecondsTime = SecondsTime < 10 ? "0" + SecondsTime : SecondsTime;

  document.getElementById("DigitalHour").innerHTML = HoursTime;
  document.getElementById("DigitalMinutes").innerHTML = MinutesTime;
  document.getElementById("DigitalSeconds").innerHTML = SecondsTime;

    let day = weekday[Time.getDay()];
    let daTe = Time.getDate();
    let month = Month[Time.getMonth()];
    let year = Time.getFullYear();

    document.querySelector("[data-day]").innerHTML = day;
    document.querySelector("[data-date]").innerHTML = daTe;
    document.querySelector("[data-month]").innerHTML = month;
    document.querySelector("[data-year]").innerHTML = year;
}
setInterval(DigitalClock, 100);


