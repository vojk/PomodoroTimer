import PlayIcon from './../svg/play.svg'
import PauseIcon from './../svg/pause.svg'
import RestartIcon from './../svg/refresh-cw.svg'
import {StartTimer, setTime, setDuration, initTimer, StopTimer} from "../func/TimerHandler";
import {values} from "../func/values";
import {BackgroundManager} from "../func/BackgroundManager";

function Timer() {
    BackgroundManager()
    return (
        <div className={"text-center"}>
            <span id={"Timer_Viewer"} className={"text-white text-8xl sm:text-[5.5rem] font-bold italic text-center select-none transition-all"}>
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
                        setDuration()
                        StopTimer()
                        setTime(document.getElementById("Timer_Viewer"))
                        values.has_timer_been_running = true
                    }} className={"flex cursor-pointer"}/>
                </div>
            </div>
        </div>
    )
}

export default Timer
