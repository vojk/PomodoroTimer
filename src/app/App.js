import './styles/App.css';
import './styles/output.css'
import Timer from "./components/Timer";
import ButtonsSwitchMode from "./components/ButtonsSwitchMode";
import {TodoList_Item, TodoList_Add} from "./components/TodoList";
import {useState} from "react";
//import {SettingsButton, SettingsMenu} from "./components/Settings";
//<div className={"absolute top-4 left-4"}>
//                 <SettingsButton/>
//             </div>
//             <div className={"absolute w-screen h-screen flex justify-center items-center"}>
//                 <SettingsMenu/>
//             </div>

function App() {
    const [todoList, setTodoList] = useState([]);

    const handleAddTask = (taskName) => {
        setTodoList([...todoList, { NameOfTask: taskName }]);
    }

    return (
        <div className={"bg-day-background bg-cover bg-center bg-no-repeat"} id={"main_container_of_app"}>
            <div
                className={"bg-gradient-to-br from-cyan-900 via-cyan-800/50 via-65% to-cyan-600/80 w-screen h-screen flex justify-center items-center"}>
                <div>
                    <div className={"mb-4 flex justify-between gap-2"}>
                        <div>
                            <ButtonsSwitchMode text={"Work"} type={"work"} isActive={true}></ButtonsSwitchMode>
                        </div>
                        <ButtonsSwitchMode text={"Short Brake"} type={"short_brake"}></ButtonsSwitchMode>
                        <ButtonsSwitchMode text={"Long Brake"} type={"long_brake"}></ButtonsSwitchMode>
                    </div>
                    <Timer></Timer>
                </div>
            </div>

            <div className={"absolute bottom-4 left-4 flex flex-col gap-2"}>
                <div id={"Todo_List_overview"} className={"flex flex-col gap-2"}>
                    {todoList.map((item) => {
                            return (
                                <TodoList_Item NameOfTask={item["NameOfTask"]}></TodoList_Item>
                            )
                        }
                    )}
                </div>
                <TodoList_Add handleAddTask={handleAddTask}></TodoList_Add>
            </div>
        </div>
    );
}

export default App;

//TODO: UDĚLAT NASTAVENÍ PRO ČAS, ABY ŠLO NASTAVIT JAK DLOUHO MÁ TRVAT "WORK" "SHORT BRAKE" "LONG BRAKE" A JEŠTĚ UDĚLAT NASTAVENÍ ABY UŽIVATEL SI MOHL VYBRAT ZDALI AUTOMATICKY PŘEPNOUT NA PAUZU/PRÁCI NEBO MANUÁLNĚ
//TODO: INTEGRACE SPOTIFY, TZN. ABY ŠLO POUŠTĚT HUDBU PŘÍMO Z APLIKACE A HLASITOST BY SE UPRAVOVALA, KDYŽ BY BYL TIMER NOTIFIKACE
//TODO: CUSTOM NOTIFIKAČNÍ ZVUKY
//TODO: TODOLIST, 1) ABY SI TAM MOHL ČLOVĚK PŘÍMO VLOŽIT CO CHCE V JAKÝCH KOLECH A VŽDY MU TO ODŠKRUTLO, KDY JE BUDE MÍT ZA SEBOU NEBO ABY JE ODŠKRTÁVAL MANUÁLNĚ
