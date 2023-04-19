import $ from 'jquery'
import moment from "moment-timezone";

const format = 'H:m:s A'
var onNextFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
let sunrise = []
let sunset = []

function getSunriseAndSunset() {
    function convertTimezone(time) {
        return moment.utc(time, format).local().format(format)
    }

    $.get("https://api.sunrise-sunset.org/json?lat=50.0874654&lng=14.4212535", function (response) {
        sunrise = response["results"]["sunrise"]
        sunset = response["results"]["sunset"]

        sunrise = convertTimezone(sunrise).replace(" AM", "").split(":")
        sunset = convertTimezone(sunset).replace(" PM", "").split(":")

        console.log(sunrise[0])
        console.log(sunset[0])
    })
}

var testForDayOrNight = function(timestamp) {
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