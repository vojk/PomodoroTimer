import Tick from './../svg/Tick.svg'
import $ from 'jquery'

import tickedUpSound from './../audio/click-21156.mp3'
import {useState} from "react";
import {TodoList, values} from "../func/values";
import arrUp from "./../svg/chevron-up.svg"
import arrDown from "./../svg/chevron-down.svg"

const tickSound = new Audio(tickedUpSound)

export function TodoListAdd(props) {
    const [taskName, setTaskName] = useState("");

    const handleInputChange = (event) => {
        setTaskName(event.target.value);
    };

    const handleAddButtonClick = () => {
        console.log(TodoList.includes(taskName))
        if (!TodoList.includes(taskName) && taskName !== "") {
            TodoList.push(taskName)
            props.handleAddTask(taskName);
            setTaskName("");
        }
    };

    function removeSelf() {
        $('#add_things_to_todo_item_add').remove()
        values.edit_mode_enabled = false
        if (!values.edit_mode_enabled) {
            $('.orderControl').removeClass("flex")
            $('.orderControl').addClass("hidden")
        }
    }


    return (
        <div className={"flex gap-2 flex-wrap sm:justify-center " + (props.hideCloseButton ? "justify-center" : "")}
             id={"add_things_to_" + props.id}>
            <input type="text" name={"todo_item_add"} id={props.id}
                   className={"outline-none bg-transparent text-white p-4 pt-1 pb-1 text-xl border-b-cyan-600 border-b focus:outline-none focus:border-b-cyan-400 transition-all"}
                   onChange={handleInputChange} value={taskName} onKeyDown={function (event) {
                if (event.key === "Enter") {
                    handleAddButtonClick()
                    console.info("New Value Inserted")
                }
            }} placeholder={"Insert name of task"} maxLength={32}
            />
            <div className={"flex gap-2 sm:justify-center"}>
                <button type={"button"} className={"text-white px-4 py-2 border border-gray-900 rounded-md bg-gray-900"}
                        onClick={handleAddButtonClick}>
                    Add to TODO list
                </button>
                <button type={"button"}
                        className={"text-white px-4 py-2 border rounded-md " + (props.hideCloseButton ? "hidden" : "")}
                        onClick={removeSelf}>
                    Close
                </button>
            </div>

        </div>
    )
}

export function TodoListItem({NameOfTask, IdOfTask, removeTask, changeOrder}) {
    console.log(NameOfTask)
    const taskName = NameOfTask.toString()
    return (
        <div className={"flex gap-2"}>
            <div className={`flex flex-col orderControl`}>
                <button className={"text-white"} onClick={() => changeOrder(IdOfTask, IdOfTask - 1)}>
                    <img src={arrUp} alt={""}/>
                </button>
                <button className={"text-white"} onClick={() => changeOrder(IdOfTask, IdOfTask + 1)}>
                    <img src={arrDown} alt={""}/>
                </button>
            </div>
            <div className={"flex items-center gap-3 select-none"} onClick={function () {
                let selector = $('#' + IdOfTask + "_tick")
                if (selector.hasClass("hidden")) {
                    selector.removeClass("hidden")
                    if (values.enable_sounds) {
                        if (values.sound_on_tick_of_task) {
                            tickSound.volume = values.volume_of_sounds
                            tickSound.play()
                        }
                    }
                } else if (!selector.hasClass("hidden")) {
                    selector.addClass("hidden")
                }

            }}>
                <div className={"border-2 border-cyan-700 w-8 h-8 rounded-sm relative"}>
                    <img src={Tick}
                         id={IdOfTask + "_tick"}
                         alt=""
                         className={"w-24 absolute z-10 scale-125 bottom-1 left-1 hidden"}/>
                < /div>
                <div className={"text-white text-xl"}>
                    {taskName}
                </div>
            </div>
        </div>
    )
}