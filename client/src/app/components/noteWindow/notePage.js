import react from 'react';
import {ReactComponent as NoteIco} from './../../svg/note-sticky.svg';

export function NoteButton() {
    return (
        <div className={"cursor-pointer text-white"} id={"settingsWindow"}>
            <NoteIco/>
        </div>
    )
}
