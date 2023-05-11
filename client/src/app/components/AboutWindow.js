import {ReactComponent as InfoIcon} from "./../svg/info.svg";
import UpdateTextBox from "./additionalComps/UpdateTextBox";

/*
            <div className={"flex flex-col gap-2"}>
                <ul className={"list-decimal ml-4"}>
                    <li><a href="#WhatIsPomodoro">What is Pomodoro Technique</a></li>
                    <li><a href="#WhyUsePomodoro">Why use Pomodoro Technique</a></li>
                    <li><a href="#WhyUseThisPomodoro">How to use this timer</a></li>
                </ul>
            </div>
*/


export function ButtonShowAbout({activeTab, setActiveTab}) {
    return (
        <div
            className={"flex items-center gap-2 select-none cursor-pointer sm:absolute sm:bottom-[-50px] sm:self-center"}
            onClick={() => setActiveTab(5)}>
            <InfoIcon/>
            About
        </div>
    )
}

export function AboutWindow() {
    return (
        <>
            <div className={"flex flex-col gap-2 text-xl font-bold"}>
                <ul className={"list-decimal ml-6"}>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Updates">Updates</a></li>
                </ul>
            </div>
            <div className={"flex flex-col gap-8"}>

                <div id={"About"}>
                    <div>
                        <h2 className={"text-3xl font-bold mt-2"}>About</h2>
                    </div>
                    <div className={"flex flex-col gap-4"}>
                        <div className={"flex flex-col gap-2"}>
                            <div>
                                <h2 className={"text-2xl font-bold mt-2"} id={"WhatIsPomodoro"}>What is Pomodoro
                                    Technique?</h2>
                            </div>
                            <div className={"overflow-y-scroll h-full"}>
                                The Pomodoro Technique is a time management method developed by Francesco Cirillo in the
                                late
                                1980s.
                                The technique uses a timer to break down work into intervals, traditionally 25 minutes in
                                length,
                                separated by short breaks. These intervals are known as "pomodoros," the plural in English
                                of
                                the
                                Italian word pomodoro (tomato), after the tomato-shaped kitchen timer that Cirillo used as a
                                university student. The method is based on the idea that frequent breaks can improve mental
                                agility.
                                The Pomodoro Technique is often used by people who work on the computer for long periods of
                                time,
                                such as writers, programmers, or students.
                            </div>
                        </div>
                        <div className={"flex flex-col gap-2"}>
                            <div>
                                <h2 className={"text-2xl font-bold mt-2"} id={"WhyUsePomodoro"}>Why use Pomodoro
                                    Technique</h2>
                            </div>
                            <div className={"overflow-y-scroll h-full"}>
                                The Pomodoro Technique is a time management method that breaks work into intervals,
                                typically 25
                                minutes long, separated by short breaks. By using a timer to track work and break intervals,
                                it
                                can
                                help improve productivity, prevent burnout, and increase motivation. Regular breaks provide
                                an
                                opportunity to recharge and improve concentration. Overall, it is a simple yet effective
                                tool
                                for
                                improving productivity and achieving better results in work and personal life.
                            </div>
                        </div>
                    </div>
                </div>

                <div id={"Updates"}>
                    <div>
                        <h2 className={"text-3xl font-bold mt-2"}>Updates</h2>
                    </div>
                    <UpdateTextBox header={"Version 0.1"} date={"23 April 2023"} body={`
                    In today's update, I am bringing you this screen and reworked settings, where you can now set almost everything, and this is only the beginning. <br>
                    Soon, you will see new features like the connection with Spotify, YouTube Music, Soundcloud, and more! 
                    
                    <div class="flex flex-col gap-4">
                    <div>
                    <h1 class="text-2xl mt-2 mb-2 font-bold">New</h1>
                    <ul class="list-disc flex flex-col gap-2">
                    <li><h2 class="text-lg font-bold">TODO settings</h2> After a long time, you are able to edit your to-do list after closing the menu on the main screen. You can reorder, edit or delete your tasks.</li>
                    <li><h2 class="text-lg font-bold">Sound settings</h2> This future is in WIP stadium. This section has only basic settings. Like, disabling sounds or global volume of sounds.</li>
                    </ul>
                    </div>
                    
                    <div>
                    <h1 class="text-2xl mt-2 mb-2 font-bold">Updated Stuff</h1>
                    <ul class="list-disc flex flex-col gap-2">
                    <li><h2 class="text-lg font-bold">TODO List</h2> Now you can have only ten tasks in your TODO list. The number of tasks will be increased when I solve UI problems. Sorry for the trouble, this can cause.</li>
                    <li><h2 class="text-lg font-bold">Background</h2> Background change on sunrise and sunset time depends on your location. And it's life without delay! <span class="italic">(BETA)</span></li>
                    </ul>
                    </div>
                    </div>
                    
                    <div>
                    <p class="mt-6">When you find some bug, please report it on <code>tmej.vojta@gmail.com</code></p>
</div>
                    
                    
                    `}/>
                </div>
            </div>

        </>
    )
}