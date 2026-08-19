import Person from "./Person"

type PersonType = {
name: string
number: string
}

type PersonsProps = {
    personsToShow: PersonType[]

}

function Persons({personsToShow}: PersonsProps) {
    return (
        <ul>
            {personsToShow.map(person => 
                <Person key={person.name} person={person} />
            )}
        </ul>
    )
}
export default Persons