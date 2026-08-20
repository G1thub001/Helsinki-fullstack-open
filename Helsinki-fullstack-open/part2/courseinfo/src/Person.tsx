type Person = {
    name: string
    number: string
    id: string
}

type PersonProps = {
    person: Person
    onDelete: (id: string) => void
}

function Person({person, onDelete}: PersonProps) {
    return (
        <li> 
            {person.id} {person.number}
            <button onClick={() => onDelete(person.id)}>
            delete
            </button>
        </li>

        
    )
       
}

export default Person