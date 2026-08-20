type Person = {
    name: string
    number: string
    id: string
}

type PersonProps = {
    person: Person
}

function Person({person}: PersonProps) {
    return (
        <li> 
            {person.name} {person.number}
        </li>
    )
       
}

export default Person