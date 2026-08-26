import Person from "./Person"

type PersonType = {
name: string
number: string
id: string
}

type PersonsProps = {
    personsToShow: PersonType[]
    onDelete: (id: string) => void

}

function Persons({personsToShow, onDelete}: PersonsProps) {
    return (
        <ul>
            {personsToShow.map(person => 
                <Person key={person.id} person={person} onDelete={onDelete}/>

            )}
        </ul>
    )
}
export default Persons