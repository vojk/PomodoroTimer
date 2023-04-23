import {saveSettings} from "../Settings";
import {useState} from "react";
import {values} from "../../func/values";
import SwitchSettings from "../SwitchSettings";

export function SettingsSound() {
    const [volume, setVolume] = useState(values.volume_of_sounds)
    const [playSoundOnTickOfTask, setPlaySoundOnTickOfTask] = useState(values.sound_on_tick_of_task)
    const [enableSound, setEnableSound] = useState(values.enable_sounds)

    const handleChangeVolume = (changeVolume) => {
        setVolume(changeVolume / 100)
        values.volume_of_sounds = changeVolume / 100
        saveSettings()
    }

    const handleChangePlaySoundOnTick = (playSound) => {
        setPlaySoundOnTickOfTask(playSound)
        values.sound_on_tick_of_task = playSound
        saveSettings()
    }

    const handleEnableSound = (enableSound) => {
        setEnableSound(enableSound)
        values.enable_sounds = enableSound
        saveSettings()
    }

    return (
        <>
            <div>
                <div>
                    <div>
                        <h2 className={"text-2xl font-bold mt-2"}>Basic</h2>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <div className={"flex gap-8  items-center justify-between mb-4"}>
                            <h3 className={"text-xl flex items-center gap-2"}>
                                Enable sounds
                            </h3>
                            <div className={"flex gap-2"}>
                                <SwitchSettings id={"playSoundOnTick"} checked={enableSound}
                                                onChange={(value) => handleEnableSound(value)}/>
                            </div>
                        </div>

                        <div className={"flex gap-8  items-center justify-between"}>
                            <h3 className={"text-xl flex items-center gap-2"}>
                                Global Volume
                            </h3>
                            <div className={"flex gap-2"}>
                                <input type="range" value={volume * 100}
                                       onChange={(event) => handleChangeVolume(event.target.value)}
                                       className={""} disabled={!enableSound}/>
                                <p className={"w-8 text-center text-xl outline-none bg-transparent text-white pt-1 pb-1 transition-all"}>
                                    {Math.floor(volume * 100)}
                                </p>
                            </div>
                        </div>

                        <div className={"flex gap-8  items-center justify-between"}>
                            <h3 className={"text-xl flex items-center gap-2"}>
                                Play sound on tick of task
                            </h3>
                            <div className={"flex gap-2"}>
                                <SwitchSettings id={"playSoundOnTick"} checked={playSoundOnTickOfTask}
                                                onChange={enableSound ? (value) => handleChangePlaySoundOnTick(value) : null} enabled={enableSound}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}