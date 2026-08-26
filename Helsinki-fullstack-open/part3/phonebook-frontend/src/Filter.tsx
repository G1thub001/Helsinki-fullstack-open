type FilterProps = {
  search: string
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Filter({search, handleSearchChange}: FilterProps) {
  return (
    <div>
      <input value={search} onChange={handleSearchChange} />
    </div>
  )
}

export default Filter