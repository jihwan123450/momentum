function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    const myAPI = "7c78dc5ec3686c8525136dc65757c582";
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${myAPI}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const wind = document.querySelector("#weather span:first-child");
            const temp = document.querySelector("#weather span:nth-child(2)");
            const name = document.querySelector("#weather span:last-child");
            name.innerText = `location : ${data.name}`;
            temp.innerText = ` min-temp : ${data.main.temp_min}℃ \n max-temp : ${data.main.temp_max}℃`;
            wind.innerText = `windspeed : ${data.wind.speed} m/s `;
            
        })
}
function onGeoError() {}
navigator
    .geolocation
    .getCurrentPosition(onGeoSuccess, onGeoError);
