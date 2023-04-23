export default function UpdateTextBox({header, date, body}) {
    function Text() {
        return <div dangerouslySetInnerHTML={{__html: "<p>" + body + "</p>"}}/>;
    }

    return (
        <div className={"flex flex-col gap-2"}>
            <div className={"flex flex-col"}>
                <h2 className={"text-2xl font-bold mt-2"} id={"WhatIsPomodoro"}>{header}</h2>
                <h2 className={"text-1xl font-bold text-gray-500"} id={"WhatIsPomodoro"}>{date}</h2>
            </div>
            <div className={"overflow-y-scroll h-full"}>
                <Text/>
            </div>
        </div>
    )
}