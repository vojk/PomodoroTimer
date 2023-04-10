import {values} from "../func/values";
import {setTime, setDuration, TimerIsRunning, StopTimer} from "../func/TimerHandler";
import $ from 'jquery'

function ButtonsSwitchMode(props) {
    function addClassToActive(elem) {
        let _elem = $("#" + elem)
        if (!_elem.hasClass("active")) {
            $('.SwitchButtons').removeClass("active")
            _elem.addClass("active")
            $('.SwitchButtons span').removeClass("active")
            $("#" + elem + " span").addClass("active")
            console.log(_elem.hasClass("active"))
        }
    }

    return (
        <div>
            <span id={props.type} onClick={function () {
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
                  className={"p-8 pb-1 pt-1 border rounded-full flex items-center justify-center w-fit h-full cursor-pointer select-none text-lg italic font-light SwitchButtons text-white sm:px-6 hover:text-black hover:bg-white transition-all " + (props.isActive ? "active" : "")}>
                        <span className={"text-center sm:whitespace-nowrap "+ (props.isActive ? "active" : "")}>
                             {props.text}
                        </span>
            </span>
        </div>
    )
}

export default ButtonsSwitchMode
