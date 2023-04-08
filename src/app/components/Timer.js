import PlayIcon from './../svg/play.svg'
import PauseIcon from './../svg/pause.svg'
import RestartIcon from './../svg/refresh-cw.svg'
import {StartTimer, setTime, setDuration, initTimer} from "../func/TimerHandler";
import {values} from "../func/values";
import {BackgroundManager} from "../func/BackgroundManager";

function Timer() {
    BackgroundManager()
    return (
        <div className={"text-center"}>
            <span id={"Timer_Viewer"} className={"text-white text-8xl font-bold italic text-center select-none"}>
                {initTimer()}
            </span>
            <div className={"flex justify-center gap-16"}>
                <div>
                    <img src={PlayIcon} alt="" className={"flex cursor-pointer"} onClick={StartTimer}
                         id={"pauseTimer"}/>
                    <img src={PauseIcon} alt="" className={"flex cursor-pointer hidden"} onClick={StartTimer}
                         id={"StartTimer"}/>
                </div>
                <div>
                    <img src={RestartIcon} alt="" onClick={function () {
                        if (values.HasTimerBeenRunning === true) {
                            setDuration()
                            StartTimer()
                            setTime(document.getElementById("Timer_Viewer"))
                            values.HasTimerBeenRunning = false
                        }
                    }} className={"flex cursor-pointer"}/>
                </div>
            </div>
        </div>
    )
}

export default Timer
