import SettingsIco from './../svg/settings.svg'
import Close from './../svg/x.svg'
import {useState} from "react";
import SwitchSettings from "./SwitchSettings";
import {blockInvalidChar, values} from "../func/values";
import $ from 'jquery'
import {setDuration, setTime} from "../func/TimerHandler";
import HelpIco from "../svg/help-circle.svg"

function saveSettings() {
    window.localStorage.setItem("values", JSON.stringify(values))
    setDuration()
    setTime(document.getElementById("Timer_Viewer"))
}

export function SettingsButton() {
    return (
        <div className={"cursor-pointer"} onClick={SettingsView} id={"settingsWindow"}>
            <img src={SettingsIco} alt=""/>
        </div>
    )
}

export function SettingsView() {
    const menu = $('#main_container_of_settings')
    if (!menu.hasClass("hidden")) {
        menu.addClass("hidden")
    } else if (menu.hasClass("hidden")) {
        menu.removeClass("hidden")
    }
}

function closeAndSave() {
    saveSettings()
    SettingsView()
}

//w-4 h-4 rounded-full border-gray-700 border-2

function HelperWithSettings({helpText, id}) {
    const showHelpText = () => {
        $("#" + id).removeClass("hidden")
        setTimeout(function () {
            $("#" + id).addClass("opacity-100")
        }, 100)

    }

    const hideHelpText = () => {
        $("#" + id).removeClass("opacity-100")
        setTimeout(function () {
            $("#" + id).addClass("hidden")
        }, 100)
    }

    return (
        <div className={"rounded-full w-5 relative"}>
            <img src={HelpIco} alt="" className={"w-5 stroke-gray-800"} onMouseOver={showHelpText}
                 onMouseLeave={hideHelpText}/>
            <div
                className={"absolute w-64 text-sm text-justify p-3 rounded-md bg-neutral-800 opacity-0 transition-all hidden select-none z-30"}
                id={id}>
                {helpText}
            </div>
        </div>
    )
}

export function SettingsMenu() {
    const [continueAfterTimer, setContinueAfterTimer] = useState(values.setTimerAfterEndToNext);

    const [workTime, setWorkTime] = useState(values.duration_work)
    const [shortBrakeTime, setShortBrakeTime] = useState(values.duration_short_brake)
    const [longBrakeTime, setLongBrakeTime] = useState(values.duration_long_brake)

    function handleContinueAfterTimerChange(newValue) {
        setContinueAfterTimer(newValue);
        values.setTimerAfterEndToNext = newValue
        saveSettings()
    }

    const handleChangeWorkTime = (event) => {
        const element = $("#workTime_error")
        if (event.target.value === 0 || event.target.value === "") {
            setWorkTime(event.target.value)
            if (element.hasClass("hidden")) {
                element.removeClass("hidden")
            }
        } else {
            if (!element.hasClass("hidden")) {
                element.addClass("hidden")
            }
            setWorkTime(event.target.value)
            values.duration_work = event.target.value
            saveSettings()
        }
    }

    const handleChangeShortBrakeTime = (event) => {
        const element = $("#shortBrakeTime_error")
        if (event.target.value === 0 || event.target.value === "") {
            setShortBrakeTime(event.target.value)
            if (element.hasClass("hidden")) {
                element.removeClass("hidden")
            }
        } else {
            if (!element.hasClass("hidden")) {
                element.addClass("hidden")
            }
            setShortBrakeTime(event.target.value)
            values.duration_short_brake = event.target.value
            saveSettings()
        }
    }

    const handleChangeLongBrakeTime = (event) => {
        const element = $("#longBrakeTime_error")
        if (event.target.value === 0 || event.target.value === "") {
            setLongBrakeTime(event.target.value)
            if (element.hasClass("hidden")) {
                element.removeClass("hidden")
            }
        } else {
            if (!element.hasClass("hidden")) {
                element.addClass("hidden")
            }
            setLongBrakeTime(event.target.value)
            values.duration_long_brake = event.target.value
            saveSettings()
        }
    }

    const setWorkTimeOnLostFocus = (event) => {
        setWorkTime(values.duration_work)
        if (!$("#workTime_error").hasClass("hidden")) {
            $("#workTime_error").addClass("hidden")
        }
    }

    const setShortBrakeTimeOnLostFocus = (event) => {
        setShortBrakeTime(values.duration_short_brake)
        if (!$("#shortBrakeTime_error").hasClass("hidden")) {
            $("#shortBrakeTime_error").addClass("hidden")
        }
    }

    const setLongBrakeTimeOnLostFocus = (event) => {
        setLongBrakeTime(values.duration_long_brake)
        if (!$("#longBrakeTime_error").hasClass("hidden")) {
            $("#longBrakeTime_error").addClass("hidden")
        }
    }

    return (
        <div className={"bg-neutral-900 w-2/3 h-2/3 flex flex-col rounded-2xl text-white relative"}
             id={"settingMenuContainer"}>
            <div className={"flex border-b border-b-gray-800 items-center p-3 pl-8 pr-8 justify-between"}>
                <h1 className={"text-2xl font-bold mt-0.5 select-none"}>Settings</h1>
                <img src={Close} alt="" className={"cursor-pointer"} onClick={SettingsView} id={"closeButton"}/>
            </div>
            <div className={"flex flex-1"}>
                <div className={"border-r border-r-gray-800 p-12 pt-10"}>
                    <ul className={"flex flex-col gap-4 text-xl select-none"}>
                        <li className={"cursor-pointer line-through text-gray-700"}>
                            General
                        </li>
                        <li className={"cursor-pointer"}>
                            Timer
                        </li>
                        <li className={"cursor-pointer line-through text-gray-700"}>
                            Sound
                        </li>
                    </ul>
                </div>

                <div className={"p-8 w-full flex flex-col items-center"} id={"TimerSettingsMenu"}>
                    <div className={"w-2/3"}>
                        <div>
                            <h2 className={"text-3xl font-bold"}>Timer</h2>
                        </div>

                        <div>
                            <div>
                                <h2 className={"text-2xl font-bold mt-2"}>Basic</h2>
                            </div>
                            <div className={"flex gap-8  items-center justify-between"}>
                                <h3 className={"text-xl"}>After end continue to next timer</h3>
                                <SwitchSettings id={"ContinueAfterTimer"} checked={continueAfterTimer}
                                                onChange={(value) => handleContinueAfterTimerChange(value)}/>
                            </div>
                        </div>
                    </div>

                    <hr className={"border-b-gray-600 border-b-2 border-0 rounded-full w-3/4 mt-4 mb-4"}/>

                    <div className={"w-2/3"}>
                        <div>
                            <h2 className={"text-2xl font-bold mt-2"}>Time Settings</h2>
                        </div>
                        <div className={"mt-2"}>
                            <div className={"flex gap-8 items-center justify-between"}>
                                <h3 className={"text-xl flex items-center gap-2"}>Work Time
                                    <HelperWithSettings
                                        helpText={"This change time of your main Pomodoro Timer, known as Work time timer. Value is in minutes. Default: 60"}
                                        id={"workTimeHelper"}/>
                                </h3>
                                <div className={"relative"}>
                                    <input id={"Work_Text_Field"} type={"number"}
                                           className={"outline-none bg-transparent text-white p-4 pt-1 pb-1 text-xl border-b-cyan-600 border-b w-24 focus:outline-none focus:border-b-cyan-400 transition-all"}
                                           min={1} onKeyDown={blockInvalidChar} onChange={handleChangeWorkTime}
                                           onBlur={setWorkTimeOnLostFocus}
                                           value={workTime}/>
                                    <p className={"absolute text-red-500 mt-0.5 hidden"} id={"workTime_error"}>Invalid
                                        input!</p>
                                </div>
                            </div>
                        </div>
                        <div className={"mt-4"}>
                            <div className={"flex gap-8 items-center justify-between"}>
                                <h3 className={"text-xl flex items-center gap-2"}>
                                    Short Brake
                                    <HelperWithSettings
                                        helpText={"This change time of your short brake, known as reset brake or small chill. Value is in minutes. Default: 10"}
                                        id={"shortBrakeTimeHelper"}/>
                                </h3>
                                <div className={"relative"}>
                                    <input id={"Work_Text_Field"} type={"number"}
                                           className={"outline-none bg-transparent text-white p-4 pt-1 pb-1 text-xl border-b-cyan-600 border-b w-24 focus:outline-none focus:border-b-cyan-400 transition-all"}
                                           min={1} onKeyDown={blockInvalidChar} onChange={handleChangeShortBrakeTime}
                                           onBlur={setShortBrakeTimeOnLostFocus}
                                           value={shortBrakeTime}/>
                                    <p className={"absolute text-red-500 mt-0.5 hidden"}
                                       id={"shortBrakeTime_error"}>Invalid
                                        input!</p>
                                </div>
                            </div>
                        </div>
                        <div className={"mt-4"}>
                            <div className={"flex gap-8 items-center justify-between"}>
                                <h3 className={"text-xl flex items-center gap-2"}>
                                    Long Brake
                                    <HelperWithSettings
                                        helpText={"This change time of your long brake, known as snack or launch brake. Value is in minutes. Default: 20"}
                                        id={"longBrakeTimeHelper"}/>
                                </h3>
                                <div className={"relative"}>
                                    <input id={"Work_Text_Field"} type={"number"}
                                           className={"outline-none bg-transparent text-white p-4 pt-1 pb-1 text-xl border-b-cyan-600 border-b w-24 focus:outline-none focus:border-b-cyan-400 transition-all"}
                                           min={1} onKeyDown={blockInvalidChar} onChange={handleChangeLongBrakeTime}
                                           onBlur={setLongBrakeTimeOnLostFocus}
                                           value={longBrakeTime}/>
                                    <p className={"absolute text-red-500 mt-0.5 hidden"}
                                       id={"longBrakeTime_error"}>Invalid
                                        input!</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={"absolute bottom-7"}>
                            <span className={"text-xl px-7 py-2 border-2 rounded-lg text-white cursor-pointer"}
                                  onClick={closeAndSave}>
                                Save
                            </span>
                    </div>
                </div>
            </div>

        </div>
    )
}