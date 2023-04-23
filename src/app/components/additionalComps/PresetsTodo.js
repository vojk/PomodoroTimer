const people = [
    {name: 'Wade Cooper'},
    {name: 'Arlene Mccoy'},
    {name: 'Devon Webb'},
    {name: 'Tom Cook'},
    {name: 'Tanya Fox'},
    {name: 'Hellen Schmidt'},
]


export default function PresetsTodo() {
    return (
        <>
            {people.map((item) => {
                return (
                    <div>{item.name}</div>
                )
            })}
        </>
    )
}