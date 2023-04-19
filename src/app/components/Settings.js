import SettingsIco from './../svg/settings.svg'
import Close from './../svg/x.svg'
import {useState} from "react";
import {blockInvalidChar, TodoList, values} from "../func/values";
import $ from 'jquery'
import {setDuration, setTime, StopTimer} from "../func/TimerHandler";
import HelpIco from "../svg/help-circle.svg"
import {SettingsTimer} from "./settings/SettingsTimer";
import {ReactComponent as DeleteIco} from './../svg/x.svg';
import {ReactComponent as Up} from './../svg/chevron-up.svg';
import {ReactComponent as Down} from './../svg/chevron-down.svg';
import {TodoListAdd} from "./TodoList";

export function saveSettings() {
    StopTimer()
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

export function HelperWithSettings({helpText, id}) {
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
            <img src={HelpIco} alt="" className={"w-5 stroke-gray-800 sm:hidden"} onMouseOver={showHelpText}
                 onMouseLeave={hideHelpText}/>
            <div
                className={"absolute w-64 text-sm text-justify p-3 rounded-md bg-neutral-800 opacity-0 transition-all hidden select-none z-30"}
                id={id}>
                {helpText}
            </div>
        </div>
    )
}

export const DivideLine = () => {
    return (
        <hr className={"border-b-gray-600 border-b-2 border-0 rounded-full w-4/5 mt-4 mb-4 self-center"}/>
    )
}

export function SettingsMenu({deleteTask, editTask, changeOrder, todoListlist, handleAddTask}) {
    const [activeTab, tabActive] = useState(2)

    return (
        <div
            className={"bg-neutral-900 w-2/3 h-2/3 flex flex-col rounded-2xl text-white relative min-h-[34rem] min-w-[42rem] sm:min-w-full sm:w-full sm:h-4/5"}
            id={"settingMenuContainer"}>
            <div className={"flex border-b border-b-gray-800 items-center p-3 pl-8 pr-8 justify-between"}>
                <h1 className={"text-2xl font-bold mt-0.5 select-none"}>Settings</h1>
                <img src={Close} alt="" className={"cursor-pointer"} onClick={SettingsView} id={"closeButton"}/>
            </div>
            <div className={"flex flex-1 sm:flex-col overflow-hidden"}>
                <div className={"border-r border-r-gray-800 p-12 pt-10 sm:border-none sm:py-8"}>
                    <ul className={"flex flex-col gap-4 text-xl select-none sm:flex-row sm:justify-between"}>
                        <li className={"line-through text-gray-700"} onClick={() => tabActive(1)}>
                            General
                        </li>
                        <li className={(activeTab === 2 ? "text-white" : "text-gray-700") + " cursor-pointer hover:text-white transition-all"}
                            onClick={() => tabActive(2)}>
                            Timer
                        </li>
                        <li className={" line-through text-gray-700"} onClick={() => tabActive(3)}>
                            Sound
                        </li>
                        <li className={(activeTab === 4 ? "text-white" : "text-gray-700") + " cursor-pointer hover:text-white transition-all"}
                            onClick={() => tabActive(4)}>
                            Todo
                        </li>
                    </ul>
                </div>

                <div className={"p-8 w-full flex flex-col items-center  sm:min-h-1/2 sm:h-2/3 sm:py-2 h-16 h-[90%]"}
                     id={"TimerSettingsMenu"}>
                    <div>
                        <h2 className={"text-3xl font-bold mb-2"} id={"settingsHeader"}>
                            {activeTab === 2 ? "Timer" : activeTab === 4 ? "Todo" : ""}
                        </h2>
                    </div>

                    <div
                        className={"w-3/4 sm:w-full flex-col overflow-scroll overflow-x-hidden px-4 snap-x " + (activeTab === 2 ? "flex" : "hidden")}
                        id={"timerSettings"}>
                        <SettingsTimer/>
                    </div>


                    <div
                        className={"w-3/4 sm:w-full h-full flex flex-col px-4 overflow-x-hidden snap-x settingsWindow relative " + (activeTab === 4 ? "flex" : "hidden")}
                        id={"todoSettings"}>
                        <div>
                            <h2 className={"text-2xl font-bold mt-2"}>List of tasks</h2>
                        </div>
                        <div className={"overflow-y-scroll h-full"}>
                            <div>
                                <div className={"flex flex-col gap-2"}>
                                    {todoListlist.map((item) => {
                                        return (
                                            <div className={"flex items-center justify-between gap-1"}>
                                                <div className={"flex items-center gap-2"}>
                                                    <span onClick={() => deleteTask(item, todoListlist.indexOf(item))}
                                                          className={"cursor-pointer"}>
                                                        <DeleteIco/>
                                                    </span>
                                                    <input type="text" name="todolistsomething"
                                                           id={todoListlist.indexOf(item) + "_list"}
                                                           value={item["NameOfTask"]}
                                                           className={"outline-none bg-transparent text-white p-4 pt-1 pb-1 text-xl border-b-cyan-600 border-b max-w-[20rem] flex-1 w-full focus:outline-none focus:border-b-cyan-400 transition-all"}
                                                           onChange={(event) => editTask(event.target.value, TodoList.indexOf(item["NameOfTask"]))}
                                                           maxLength={32}/>
                                                </div>
                                                <div className={"flex gap-1"}>

                                                    <span
                                                        onClick={() => changeOrder(todoListlist.indexOf(item), todoListlist.indexOf(item) - 1)}
                                                        className={"cursor-pointer"}>
                                                        <Up/>
                                                    </span>
                                                    <span
                                                        onClick={() => changeOrder(todoListlist.indexOf(item), todoListlist.indexOf(item) + 1)}
                                                        className={"cursor-pointer"}>
                                                        <Down/>
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div
                            className={"flex justify-center sticky bottom-0 w-full py-1 bg-neutral-900 items-center sm:flex-col"}>
                            <TodoListAdd handleAddTask={handleAddTask} hideCloseButton={true}
                                         id={"todo_item_add_settings"}/>
                        </div>

                    </div>


                    <div className={"absolute bottom-7"}>
                            <span
                                className={"text-xl px-7 py-2 border-2 rounded-lg text-white cursor-pointer hover:text-black hover:bg-white transition-all"}
                                onClick={closeAndSave}>
                                Save
                            </span>
                    </div>
                </div>
            </div>

        </div>
    )
}