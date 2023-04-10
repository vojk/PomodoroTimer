import './styles/App.css';
import './styles/output.css'
import Timer from "./components/Timer";
import ButtonsSwitchMode from "./components/ButtonsSwitchMode";
import {TodoListItem, TodoListAdd} from "./components/TodoList";
import {useState} from "react";
import {SettingsButton, SettingsMenu} from "./components/Settings";
import {TodoList} from "./func/values";

function App() {
    const [todoList, setTodoList] = useState([]);

    const handleAddTask = (taskName) => {
        setTodoList([...todoList, {NameOfTask: taskName}]);
    }


    return (
        <div className={"bg-day-background bg-cover bg-center bg-no-repeat bg-cyan-950"} id={"main_container_of_app"}>
            <div className={"absolute top-4 left-4"}>
                <SettingsButton/>
            </div>
            <div
                className={"absolute w-screen h-screen flex justify-center items-center bg-black/40 backdrop-blur-sm z-20 hidden"}
                id={"main_container_of_settings"}>
                <SettingsMenu/>
            </div>
            <div
                className={"bg-gradient-to-br from-cyan-900 via-cyan-800/50 via-65% to-cyan-600/80 w-screen h-screen flex justify-center items-center"}>
                <div>
                    <div className={"mb-4 flex justify-between gap-2"}>
                        <ButtonsSwitchMode text={"Work"} type={"work"} isActive={true}></ButtonsSwitchMode>
                        <ButtonsSwitchMode text={"Short Brake"} type={"short_brake"}></ButtonsSwitchMode>
                        <ButtonsSwitchMode text={"Long Brake"} type={"long_brake"}></ButtonsSwitchMode>
                    </div>
                    <Timer></Timer>
                </div>
            </div>

            <div className={"absolute bottom-4 left-4 flex flex-col gap-2 sm:left-0"}>
                <div id={"Todo_List_overview"} className={"flex flex-col gap-2"}>
                    {todoList.map((item) => {
                            return (
                                <TodoListItem NameOfTask={item["NameOfTask"]} IdOfTask={TodoList.indexOf(item["NameOfTask"])}></TodoListItem>
                            )
                        }
                    )}
                </div>
                <TodoListAdd handleAddTask={handleAddTask}></TodoListAdd>
            </div>
        </div>
    );
}

export default App;

//TODO: UDĚLAT NASTAVENÍ PRO ČAS, ABY ŠLO NASTAVIT JAK DLOUHO MÁ TRVAT "WORK" "SHORT BRAKE" "LONG BRAKE" A JEŠTĚ UDĚLAT NASTAVENÍ ABY UŽIVATEL SI MOHL VYBRAT ZDALI AUTOMATICKY PŘEPNOUT NA PAUZU/PRÁCI NEBO MANUÁLNĚ
//TODO: INTEGRACE SPOTIFY, TZN. ABY ŠLO POUŠTĚT HUDBU PŘÍMO Z APLIKACE A HLASITOST BY SE UPRAVOVALA, KDYŽ BY BYL TIMER NOTIFIKACE
//TODO: CUSTOM NOTIFIKAČNÍ ZVUKY
//TODO: TODOLIST, 1) ABY SI TAM MOHL ČLOVĚK PŘÍMO VLOŽIT CO CHCE V JAKÝCH KOLECH A VŽDY MU TO ODŠKRUTLO, KDY JE BUDE MÍT ZA SEBOU NEBO ABY JE ODŠKRTÁVAL MANUÁLNĚ
