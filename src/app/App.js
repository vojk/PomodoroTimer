import './styles/output.css'
import './styles/App.css';
import Timer from "./components/Timer";
import ButtonsSwitchMode from "./components/ButtonsSwitchMode";
import {TodoListItem, TodoListAdd} from "./components/TodoList";
import {useState} from "react";
import {SettingsButton, SettingsMenu} from "./components/Settings";
import {TodoList} from "./func/values";

function App() {
    const [todoList, setTodoList] = useState([]);

    const handleAddTask = (taskName) => {
        if (TodoList.length <= 10) {
            setTodoList([...todoList, {NameOfTask: taskName}]);
        } else {
            console.error("You reach maximum of items")
        }

    }

    const handleRemoveTask = (taskName, index) => {
        const updatedTodoList = [...todoList];
        updatedTodoList.splice(index, 1);
        TodoList.splice(TodoList.indexOf(taskName), 1)
        setTodoList(updatedTodoList);
    }

    const handleChangeOrderTask = (oldIndex, newIndex) => {
        if (!(newIndex >= TodoList.length) && !(newIndex < 0)) {
            const updatedTodoList = [...todoList];
            const itemToMove = updatedTodoList[oldIndex];
            updatedTodoList.splice(oldIndex, 1);
            updatedTodoList.splice(newIndex, 0, itemToMove);
            TodoList.splice(oldIndex, 1);
            TodoList.splice(newIndex, 0, itemToMove["NameOfTask"]);
            console.log(TodoList)
            setTodoList(updatedTodoList);
        } else {
            if (newIndex >= TodoList.length) {
                console.error("New Index Is Bigger Or Equal Than Size Of List. \n Size Of List Is " + TodoList.length + " And Size Of New Index Is " + newIndex)
            } else if (newIndex < 0) {
                console.error("New Index Is Smaller Than Size Of List. \n Size Of List Is " + TodoList.length + " And Size Of New Index Is " + newIndex)
            }
        }
    }

    const handleEditValue = (newValue, index) => {
        const updatedTodoList = [...todoList]
        updatedTodoList[index]["NameOfTask"] = newValue
        TodoList[index] = newValue
        setTodoList(updatedTodoList)
    }

    return (
        <div className={"bg-day-background bg-cover bg-center bg-no-repeat bg-cyan-950"} id={"main_container_of_app"}>
            <div className={"absolute top-4 left-4"}>
                <SettingsButton/>
            </div>
            <div
                className={"absolute w-screen h-screen flex justify-center items-center bg-black/40 backdrop-blur-sm z-20 hidden"}
                id={"main_container_of_settings"}>
                <SettingsMenu deleteTask={handleRemoveTask} editTask={handleEditValue}
                              changeOrder={handleChangeOrderTask} todoListlist={todoList}
                              handleAddTask={handleAddTask}/>
            </div>
            <div
                className={"bg-gradient-to-br from-cyan-900 via-cyan-800/50 via-65% to-cyan-600/80 w-screen h-screen flex justify-center items-center sm:px-4"}>
                <div>
                    <div className={"mb-4 flex justify-between gap-2"}>
                        <ButtonsSwitchMode text={"Work"} type={"work"} isActive={true}></ButtonsSwitchMode>
                        <ButtonsSwitchMode text={"Short Brake"} type={"short_brake"}></ButtonsSwitchMode>
                        <ButtonsSwitchMode text={"Long Brake"} type={"long_brake"}></ButtonsSwitchMode>
                    </div>
                    <Timer></Timer>
                </div>
            </div>

            <div className={"absolute bottom-4 left-4 right-4 flex flex-col gap-2 transition-all"}>
                <div id={"Todo_List_overview"}
                     className={"flex flex-col gap-2 sm:ml-4 overflow-y-scroll sm:max-h-[220px] sm:h-[100%]"}>
                    {todoList.map((item) => {
                            return (
                                <TodoListItem NameOfTask={item["NameOfTask"]}
                                              IdOfTask={TodoList.indexOf(item["NameOfTask"])} removeTask={handleRemoveTask}
                                              changeOrder={handleChangeOrderTask}></TodoListItem>
                            )
                        }
                    )}
                </div>
                <TodoListAdd handleAddTask={handleAddTask} id={"todo_item_add"}></TodoListAdd>
            </div>
        </div>
    );
}

export default App;

//TODO: UDĚLAT NASTAVENÍ PRO ČAS, ABY ŠLO NASTAVIT JAK DLOUHO MÁ TRVAT "WORK" "SHORT BRAKE" "LONG BRAKE" A JEŠTĚ UDĚLAT NASTAVENÍ ABY UŽIVATEL SI MOHL VYBRAT ZDALI AUTOMATICKY PŘEPNOUT NA PAUZU/PRÁCI NEBO MANUÁLNĚ
//TODO: INTEGRACE SPOTIFY, TZN. ABY ŠLO POUŠTĚT HUDBU PŘÍMO Z APLIKACE A HLASITOST BY SE UPRAVOVALA, KDYŽ BY BYL TIMER NOTIFIKACE
//TODO: CUSTOM NOTIFIKAČNÍ ZVUKY
//TODO: TODOLIST, 1) ABY SI TAM MOHL ČLOVĚK PŘÍMO VLOŽIT CO CHCE V JAKÝCH KOLECH A VŽDY MU TO ODŠKRUTLO, KDY JE BUDE MÍT ZA SEBOU NEBO ABY JE ODŠKRTÁVAL MANUÁLNĚ
