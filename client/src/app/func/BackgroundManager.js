import $ from 'jquery'
import moment from "moment-timezone";

const format = 'H:m:s A'
var onNextFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
let sunrise = []
let sunset = []
let latitude
let longitude

function getSunriseAndSunset() {
    function convertTimezone(time) {
        return moment.utc(time, format).local().format(format)
    }

    let apiKey = 'f963c497b1104f4fa76960ca8cc84c3f';
    $.getJSON('https://api.geoapify.com/v1/ipinfo?&apiKey=' + apiKey, function (data) {
        console.log(data)
        latitude = data["location"]["latitude"];
        longitude = data["location"]["longitude"];
        console.log(latitude)
        console.log(longitude)
    });

    $.get("https://api.sunrise-sunset.org/json?lat=" + latitude + "&lng=" + longitude, function (response) {
        sunrise = response["results"]["sunrise"]
        sunset = response["results"]["sunset"]

        sunrise = convertTimezone(sunrise).replace(" AM", "").split(":")
        sunset = convertTimezone(sunset).replace(" PM", "").split(":")

        console.log(sunrise)
        console.log(sunset)
    })
}

var testForDayOrNight = function (timestamp) {
    const mainContainer = document.getElementById("main_container_of_app")
    if ((new Date().getHours() >= sunset[0] || new Date().getHours() <= sunrise[0])) {
        if (!mainContainer.classList.contains("bg-night-background")) {
            mainContainer.classList.remove("bg-day-background");
            mainContainer.classList.add("bg-night-background");
        }
    } else if ((new Date().getHours() <= sunset[0] || new Date().getHours() >= sunrise[0])) {
        if (!mainContainer.classList.contains("bg-day-background")) {
            mainContainer.classList.remove("bg-night-background");
            mainContainer.classList.add("bg-day-background");
        }
    }
    onNextFrame(testForDayOrNight)
}

export function BackgroundManager() {
    getSunriseAndSunset()
    testForDayOrNight()

    onNextFrame(testForDayOrNight)
}