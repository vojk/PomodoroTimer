function testForDayOrNight() {
    const mainContainer = document.getElementById("main_container_of_app")
    if ((new Date().getHours() >= 18 || new Date().getHours() <= 6)) {
        if (!mainContainer.classList.contains("bg-night-background")) {
            mainContainer.classList.remove("bg-day-background");
            mainContainer.classList.add("bg-night-background");
        }
    } else if ((new Date().getHours() <= 18 || new Date().getHours() >= 6)) {
        if (!mainContainer.classList.contains("bg-day-background")) {
            mainContainer.classList.remove("bg-night-background");
            mainContainer.classList.add("bg-day-background");
        }
    }
}

export function BackgroundManager() {
    setTimeout(testForDayOrNight, 50)

    setInterval(function () {
        testForDayOrNight()
    }, 5000)
}