type PersonFormProps = {
    newName: string
    newNumber: string
    handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleNumberChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    addPerson: (event: React.FormEvent<HTMLFormElement>) => void
}

function PersonForm({newName, newNumber, handleNameChange, handleNumberChange, addPerson}: PersonFormProps) {
    return (
    <form onSubmit={addPerson}>
    <div>
    <input value={newName} onChange={handleNameChange} />
    </div>
    <div>
      <input value = {newNumber} onChange={handleNumberChange} />
    </div>
   
    <button type="submit">add</button>
  </form>
    )
}

export default PersonForm