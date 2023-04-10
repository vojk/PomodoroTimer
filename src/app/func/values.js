export const values = {
    duration_work: 25,
    duration_short_brake: 5,
    duration_long_brake: 20,
    number_of_work: 0,
    number_of_work_before_long_brake: 4,
    type_of_timer: "work",
    has_timer_been_running: false,
    set_timer_after_end_to_next: true,
    use_classic_pomodoro_mod: true
}
//window.localStorage.setItem("values", JSON.stringify(values)) //pro uložení
//JSON.parse(window.localStorage.getItem("values")) //pro načtení

const values_to_ignore_while_loading = ["has_timer_been_running", "type_of_timer", "number_of_work"]

if (JSON.parse(window.localStorage.getItem("values")) !== null) { //pro načtení
    try {
        JSON.parse(window.localStorage.getItem("values"), (key, value) => {
            if (value.toString() !== "[object Object]" && !values_to_ignore_while_loading.includes(key)) {
                console.info(key + ": " + value)
                values[key] = value
            }
        })
    } catch (e) {
        console.error(e)
    } finally {
        console.info("Loading is done")
    }
}

export let TodoList = []

export const blockInvalidChar = e => {
    const regex = /[0-9]/;
    if (!regex.test(e.key) && e.key !== 'Backspace') {
        e.preventDefault();
    }
};


//export const blockInvalidChar = e => "/[a-zA-Z+-]/".includes(e.key) && e.preventDefault();

