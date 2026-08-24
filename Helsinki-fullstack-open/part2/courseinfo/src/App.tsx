import {useState} from 'react'
import countryService from './services/countries'

type Country = {
  cca3: string
  name: {
    common: string
    official: string
  }
  capital: string[]
  area: number
  population: number
  languages: {
    [key: string]: string
  }
  flags: {
    png: string
    svg: string
  }
}

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState<Country[]>([])

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearch(event.target.value)
  }

  const handleSearch = (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault()

  countryService
    .getAll()
    .then(response => {
      const matches = response.data.filter((country: Country) =>
        country.name.common
          .toLowerCase()
          .includes(search.toLowerCase())
      )

      setCountries(matches)
    })
}

const showCountry = (country: Country) => {
  setCountries([country])
}
  return (
    <div>
      <form onSubmit={handleSearch}>
        find countries:
        <input
          value={search}
          onChange={handleSearchChange}
        />
        <button type="submit">search</button>
      </form>
      
{countries.length > 10 && (
  <p>Too many matches, specify another filter</p>
)}
{countries.length > 1 && countries.length <= 10 && (
  <ul>
    {countries.map(country => (
      <li key={country.cca3}>
        {country.name.common}
        <button onClick={() => showCountry(country)}>
          show
        </button>
      </li>
    ))}
  </ul>
)}
{countries.length === 1 && (
  <div>
    <h2>{countries[0].name.common}</h2>

    <img
      src={countries[0].flags.png}
      alt={`Flag of ${countries[0].name.common}`}
    />

    <p>capital {countries[0].capital}</p>
    <p>area {countries[0].area}</p>
    <p>population {countries[0].population}</p>

    <h3>languages:</h3>

    <ul>
      {Object.values(countries[0].languages).map(language => (
        <li key={language}>{language}</li>
      ))}
    </ul>
  </div>
)}
  </div>
  )
}

export default App