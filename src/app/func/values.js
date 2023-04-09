export const values = {
    duration_work: 60,
    duration_short_brake: 10,
    duration_long_brake: 20,
    HasTimerBeenRunning: false,
    type_of_timer: "work",
    setTimerAfterEndToNext: true
}
//window.localStorage.setItem("values", JSON.stringify(values)) pro uložení
//JSON.parse(window.localStorage.getItem("values")) //pro načtení

console.log(JSON.parse(window.localStorage.getItem("values")))

if (JSON.parse(window.localStorage.getItem("values")) !== null) {
    JSON.parse(window.localStorage.getItem("values"), (key, value) => {
        if (value.toString() !== "[object Object]" && key !== "HasTimerBeenRunning" && key !== "type_of_timer") {
            console.log(key + ": " + value)
            values[key] = value
        }
    })
}


export let todoList = []


export const blockInvalidChar = e => {
    const regex = /[0-9]/;
    if (!regex.test(e.key) && e.key !== 'Backspace') {
        e.preventDefault();
    }
};


//export const blockInvalidChar = e => "/[a-zA-Z+-]/".includes(e.key) && e.preventDefault();

