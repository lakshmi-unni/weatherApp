function findWeather() {
    let currLocation = place.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currLocation}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`).
        then(res => res.json()).then(data => printDetails(data))

}
function printDetails(data) {
    let placeName = data.name
    console.log(placeName);
    const d = new Date();
    let year = d.getFullYear()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[d.getMonth()];
    let date = d.getDate();
    let currDate = `${date} ${month} ${year}`
    console.log(currDate);
    let temp = Math.round(data.main.temp)
    console.log(`${temp} %C`);
    let weather = data.weather[0].main
    console.log(weather);
    let maximumTemp = Math.round(data.main.temp_max)
    let minimumTemp = Math.round(data.main.temp_min)
    console.log(minimumTemp, maximumTemp);
    let icon=`<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="">`

    let html_data = `
    <h3 class="mt-5">${placeName}</h3>
    <p>${currDate}</p>
    <h1>${temp} %C</h1><br>
    <h4>${weather}</h4>
    <p>${maximumTemp}%c / ${minimumTemp}%c</p>`

    document.querySelector("#result").innerHTML=html_data
    document.querySelector("#icon").innerHTML=icon
}