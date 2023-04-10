import Tick from './../svg/Tick.svg'
import $ from 'jquery'

import tickedUpSound from './../audio/click-21156.mp3'
import {useState} from "react";
import {TodoList} from "../func/values";

export function TodoListAdd(props) {
    const [taskName, setTaskName] = useState("");

    const handleInputChange = (event) => {
        setTaskName(event.target.value);
    };

    const handleAddButtonClick = () => {
        console.log(TodoList.includes(taskName))
        if (/*!TodoList.includes(taskName) && */taskName !== "") {
            TodoList.push(taskName)
            props.handleAddTask(taskName);
            setTaskName("");
            $('#todo_item_add').val("")
        }
    };

    function removeSelf() {
        $('#add_things_to_Todo').remove()
    }


    return (
        <div className={"flex gap-2 flex-wrap sm:justify-center"} id={"add_things_to_Todo"}>
            <input type="text" name={"todo_item_add"} id={"todo_item_add"}
                   className={"outline-none bg-transparent text-white p-4 pt-1 pb-1 text-xl border-b-cyan-600 border-b focus:outline-none focus:border-b-cyan-400 transition-all"}
                   onChange={handleInputChange} onKeyDown={function (event) {
                if (event.key === "Enter") {
                    handleAddButtonClick()
                    console.log("Test")
                }
            }} placeholder={"Insert your plan"}
            />
            <div className={"flex gap-2 sm:justify-center"}>
                <button type={"button"} className={"text-white px-4 py-2 border border-gray-900 rounded-md bg-gray-900"}
                        onClick={handleAddButtonClick}>
                    Add to TODO list
                </button>
                <button type={"button"} className={"text-white px-4 py-2 border rounded-md"} onClick={removeSelf}>
                    Close
                </button>
            </div>

        </div>
    )
}

export function TodoListItem({NameOfTask, IdOfTask}) {
    console.log(NameOfTask)
    const taskName = NameOfTask.toString()
    return (
        <div>
            <div className={"flex items-center gap-3 select-none"} onClick={function () {
                let selector = $('#' + IdOfTask + "_tick")
                if (selector.hasClass("hidden")) {
                    selector.removeClass("hidden")
                    new Audio(tickedUpSound).play()
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