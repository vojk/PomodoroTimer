import SettingsIco from './../svg/settings.svg'
import Close from './../svg/x.svg'
import {useState} from "react";
import SwitchSettings from "./SwitchSettings";
import {values} from "../func/values";

function saveSettings() {
    window.localStorage.setItem("values", JSON.stringify(values))
}

export function SettingsButton() {
    return (
        <div className={"cursor-pointer"}>
            <img src={SettingsIco} alt=""/>
        </div>
    )
}

export function SettingsMenu() {
    const [continueAfterTimer, setContinueAfterTimer] = useState(values.setTimerAfterEndToNext);

    function handleContinueAfterTimerChange(newValue) {
        setContinueAfterTimer(newValue);
        values.setTimerAfterEndToNext = newValue
        saveSettings()
    }

    return (
        <div className={"bg-neutral-900 w-2/5 h-2/3 flex flex-col rounded-2xl text-white"}>
            <div className={"flex border-b border-b-gray-600 items-center p-3 pl-8 pr-8 justify-between"}>
                <h1 className={"text-2xl font-bold"}>Settings</h1>
                <img src={Close} alt=""/>
            </div>
            <div className={"flex flex-1"}>
                <div className={"border-r border-r-gray-600 p-12 pt-10"}>
                    <ul className={"flex flex-col gap-4 text-xl font-bold"}>
                        <li className={"cursor-pointer"}>
                            General
                        </li>
                        <li className={"cursor-pointer"}>
                            Timer
                        </li>
                        <li className={"cursor-pointer"}>
                            Sound
                        </li>
                    </ul>
                </div>
                <div className={"p-8"} id={"TimerSettingsMenu"}>
                    <div>
                        <h2 className={"text-3xl font-bold"}>Timer</h2>
                    </div>

                    <div>
                        <div>
                            <h2 className={"text-2xl font-bold mt-2"}>Basic</h2>
                        </div>
                        <div className={"flex gap-8  items-center"}>
                            <h3 className={"text-xl"}>Continue Timer After End?</h3>
                            <SwitchSettings id={"ContinueAfterTimer"} checked={continueAfterTimer}
                                            onChange={(value) => handleContinueAfterTimerChange(value)}/>
                        </div>
                    </div>


                    <div>
                        <div>
                            <h2 className={"text-2xl font-bold mt-2"}>Time Settings</h2>
                        </div>
                        <div>
                            <div className={"flex gap-8 items-center"}>
                                <h3 className={"text-xl"}>Work Time</h3>
                                <input id={"Work_Text_Field"} type={"number"}
                                       className={"text-black p-4 pb-1 pt-1 rounded-lg w-24"} min={0} onInput={(value) => function (value) {
                                    values.duration_work = value;
                                    saveSettings()
                                    console.log(value)
                                }}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}