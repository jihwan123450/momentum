function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    const myAPI = "7c78dc5ec3686c8525136dc65757c582";
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${myAPI}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const name = document.querySelector("#weather span:last-child");
            name.innerText = data.name;
            weather.innerText = `${data
                .weather[0]
                .main} / ${data
                .main
                .temp}℃`;

        })
}
function onGeoError() {}
navigator
    .geolocation
    .getCurrentPosition(onGeoSuccess, onGeoError);
