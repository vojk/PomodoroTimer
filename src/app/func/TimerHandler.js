import {values} from "../func/values";
import fiveMinuteWarning from '../audio/FiveMinutes.wav'
import EndTimer from '../audio/EndTimer.wav'
import $ from "jquery";

export let TimerIsRunning = false;
export let timerIsPaused = false
let timerInterval;
let durationInSeconds

let hours = 0;
let minutes = 0;
let seconds = 0;


function playAudio_FiveMinutes() {
    new Audio(fiveMinuteWarning).play()
}

function toggleButtonToControlTimer() {
    document.getElementById("pauseTimer").classList.toggle("hidden")
    document.getElementById("StartTimer").classList.toggle("hidden")
}

function switchTimersButtons(elem) {
    let _elem = $("#" + elem)
    if (!_elem.hasClass("active")) {
        $('.SwitchButtons').removeClass("active")
        _elem.addClass("active")
        $('.SwitchButtons span').removeClass("active")
        $("#" + elem + " span").addClass("active")
        console.log(_elem.hasClass("active"))
    }
}

export function setDuration() {
    switch (values.type_of_timer) {
        case "work":
            durationInSeconds = values.duration_work * 60;
            break
        case "short_brake":
            durationInSeconds = values.duration_short_brake * 60;
            break
        case "long_brake":
            durationInSeconds = values.duration_long_brake * 60;
            break
        default:
            durationInSeconds = values.duration_work * 60;
            break
    }
}


export function setTime(timerDisplay) {
    hours = parseInt(durationInSeconds / 3600, 10);
    minutes = parseInt(durationInSeconds % 3600 / 60, 10);
    seconds = parseInt(durationInSeconds % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    if (timerDisplay !== "None") {
        if (hours > 0) {
            timerDisplay.textContent = hours + ":" + minutes + ":" + seconds;
        } else {
            timerDisplay.textContent = "00:" + minutes + ":" + seconds;
        }
    } else if (timerDisplay === "None") {
        if (hours > 0) {
            return hours + ":" + minutes + ":" + seconds;
        } else {
            return "00:" + minutes + ":" + seconds;
        }
    }

}


export function StartTimer() {
    let timerDisplay = document.getElementById("Timer_Viewer");

    if (timerIsPaused) {
        toggleButtonToControlTimer()
    }

    timerIsPaused = false;

    if (!values.HasTimerBeenRunning) {
        toggleButtonToControlTimer()
        values.HasTimerBeenRunning = true
        setDuration()
    }

    if (!TimerIsRunning) {

        TimerIsRunning = true;
        timerInterval = setInterval(function () {
            setTime(timerDisplay)
// eslint-disable-next-line
            if (minutes == 5 && seconds == 0 && values.type_of_timer === "work") {
                playAudio_FiveMinutes()
            }

            if (--durationInSeconds < 0) {
                clearInterval(timerInterval);
                TimerIsRunning = !TimerIsRunning;
                if (values.setTimerAfterEndToNext && values.type_of_timer === "work") {
                    values.type_of_timer = "short_brake"
                    switchTimersButtons("short_brake")
                    setDuration()
                    setTime(timerDisplay)
                    StartTimer()
                } else if (values.setTimerAfterEndToNext && values.type_of_timer === "short_brake") {
                    values.type_of_timer = "work"
                    switchTimersButtons("work")
                    setDuration()
                    setTime(timerDisplay)
                    StartTimer()
                } else {
                    setDuration()
                    setTime(timerDisplay)
                    toggleButtonToControlTimer()
                }

                new Audio(EndTimer).play()
            }
        }, 1000);
    } else if (TimerIsRunning) {
        timerIsPaused = true
        clearInterval(timerInterval);
        TimerIsRunning = !TimerIsRunning;
        toggleButtonToControlTimer()
    }
}

export function StopTimer() {
    if (TimerIsRunning) {
        clearInterval(timerInterval);
        timerIsPaused = true
        TimerIsRunning = !TimerIsRunning;
        toggleButtonToControlTimer()
    }
}

export function initTimer() {
    setDuration()
    return setTime("None")
}
