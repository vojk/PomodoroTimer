import {values} from "../func/values";
import {setTime, setDuration, TimerIsRunning, StopTimer} from "../func/TimerHandler";
import $ from 'jquery'

function ButtonsSwitchMode(props) {

    function addClassToActive(elem) {
        console.log(elem + "_button")
        let _elem = $("#" + elem + "_button")

        if (!_elem.hasClass("active")) {
            $('.SwitchButtons').removeClass("active")
            _elem.addClass("active")
            console.log(_elem.hasClass("active"))
        }
    }

    return (
        <div>
            <span id={props.type + "_button"} onClick={function () {
                addClassToActive([props.type])
                if (TimerIsRunning) {
                    StopTimer()
                    values.type_of_timer = props.type
                    console.log(values.type_of_timer)
                    setDuration()
                    setTime(document.getElementById("Timer_Viewer"))
                } else {
                    values.type_of_timer = props.type
                    console.log(values.type_of_timer)
                    setDuration()
                    setTime(document.getElementById("Timer_Viewer"))
                }

            }}
                  className={"p-8 pb-1 pt-1 border rounded-full text-center sm:whitespace-nowrap flex items-center justify-center w-fit h-full cursor-pointer select-none text-lg italic font-light SwitchButtons text-white sm:px-6 hover:text-black hover:bg-white transition-all " + (props.isActive ? "active" : "")}>
                             {props.text}
            </span>
        </div>
    )
}

export default ButtonsSwitchMode
