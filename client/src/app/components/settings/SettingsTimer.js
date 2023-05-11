import {useState} from "react";
import {blockInvalidChar, values} from "../../func/values";
import $ from "jquery";
import {StopTimer} from "../../func/TimerHandler";
import {DivideLine, HelperWithSettings, saveSettings} from "../Settings";
import SwitchSettings from "../SwitchSettings";

export function SettingsTimer() {
    const [continueAfterTimer, setContinueAfterTimer] = useState(values.set_timer_after_end_to_next);
    const [useClassicPomodoroMod, setUseClassicPomodoroMod] = useState(values.use_classic_pomodoro_mod);

    const [workTime, setWorkTime] = useState(values.duration_work)
    const [shortBrakeTime, setShortBrakeTime] = useState(values.duration_short_brake)
    const [longBrakeTime, setLongBrakeTime] = useState(values.duration_long_brake)

    const [modOfPomodoro, setModOfPomodoro] = useState(values.number_of_work_before_long_brake)

    function handleContinueAfterTimerChange(newValue) {
        setContinueAfterTimer(newValue);
        values.set_timer_after_end_to_next = newValue
        saveSettings()
    }

    function handleUseClassicPomodoroMod(newValue) {
        setUseClassicPomodoroMod(newValue);
        values.use_classic_pomodoro_mod = newValue
        saveSettings()
    }

    function handleModOfPomodoro(event) {
        const newValue = event.target.value;
        setModOfPomodoro(newValue);
        values.number_of_work_before_long_brake = +newValue
        saveSettings();
        //setModOfPomodoro(newValue);
        //values.number_of_work_before_long_brake = newValue
        //saveSettings()
    }

    const handleChangeWorkTime = (event) => {
        const element = $("#workTime_error")
        if (event.target.value === "0" || event.target.value === "") {
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
            StopTimer()
            saveSettings()
        }
    }

    const handleChangeShortBrakeTime = (event) => {
        const element = $("#shortBrakeTime_error")
        if (event.target.value === "0" || event.target.value === "") {
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
            StopTimer()
            saveSettings()
        }
    }

    const handleChangeLongBrakeTime = (event) => {
        const element = $("#longBrakeTime_error")
        if (event.target.value === "0" || event.target.value === "") {
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
            StopTimer()
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
        <>
                <div>
                    <div>
                        <div>
                            <h2 className={"text-2xl font-bold mt-2"}>Basic</h2>
                        </div>
                        <div className={"flex gap-8  items-center justify-between"}>
                            <h3 className={"text-xl flex items-center gap-2"}>After end continue to next timer
                                <HelperWithSettings
                                    helpText={"After the end of timer switch to next timer. In default Work -> Short (4x) -> Long -> ..."}
                                    id={"endContinueHelper"}/>
                            </h3>
                            <SwitchSettings id={"ContinueAfterTimer"} checked={continueAfterTimer}
                                            onChange={(value) => handleContinueAfterTimerChange(value)}/>
                        </div>
                    </div>
                </div>

                <DivideLine/>

                <div>
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
                                <p className={"absolute text-red-500 mt-0.5 hidden"}
                                   id={"workTime_error"}>Invalid
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
                                       min={1} onKeyDown={blockInvalidChar}
                                       onChange={handleChangeShortBrakeTime}
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

                <DivideLine/>

                <div>
                    <div>
                        <h2 className={"text-2xl font-bold mt-2"}>Pomodoro Mods</h2>
                    </div>
                    <div className={"flex gap-8  items-center justify-between my-4"}>
                        <h3 className={"text-xl flex items-center gap-2"}>Use classic mod
                            <HelperWithSettings
                                helpText={"Classic mod is for example like that: Work -> Short (4x) -> Long -> ..."}
                                id={"classicModHelper"}/>
                        </h3>
                        <SwitchSettings id={"useClassicPomodoroMod"} checked={useClassicPomodoroMod}
                                        onChange={(value) => handleUseClassicPomodoroMod(value)}/>
                    </div>

                    <div className={"flex gap-8  items-center justify-between my-4 mb-12"}>
                        <h3 className={"text-xl flex items-center gap-2"}>Select mod
                            <HelperWithSettings
                                helpText={"Here you can select how you want your mod be. 4/1 is 1 long brake on 4 work period"}
                                id={"selectMod"}/>
                        </h3>
                        <div>
                            <select id={"SelectMod"}
                                    className={"outline-none bg-transparent text-white p-4 pt-1 pb-1 text-xl border-b-cyan-600 border-b w-24 focus:outline-none focus:border-b-cyan-400 transition-all"}
                                    onChange={handleModOfPomodoro} value={modOfPomodoro}>
                                <option value="4">4/1</option>
                                <option value="5">5/1</option>
                                <option value="6">6/1</option>
                            </select>
                        </div>
                    </div>
                </div>
        </>
    );
}