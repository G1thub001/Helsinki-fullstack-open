type Person = {
    name: string
    number: string
    _id: string
}

type PersonProps = {
    person: Person
    onDelete: (id: string) => void
}

function Person({ person, onDelete }: PersonProps) {
    return (
        <li>
            {person.name} {person.number}
            <button onClick={() => onDelete(person._id)}>
                delete
            </button>
        </li>
    )
}

export default Person