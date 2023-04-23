import {Switch} from "@headlessui/react";

export default function SwitchSettings({id, checked, onChange, enabled}) {
    if (enabled === undefined){
        enabled = true
    }
    return (
        <div>
            < Switch
                checked={checked}
                onChange={onChange}
                id={id}
                className={`${checked ? 'bg-blue-600' : 'bg-gray-800'} relative inline-flex h-6 w-11 items-center rounded-full ${enabled ? 'bg-blue-600' : 'bg-gray-800'}`}
            >
                <span
                    className={`${
                        checked ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`
                    }
                />
            </Switch>
        </div>
    )


}