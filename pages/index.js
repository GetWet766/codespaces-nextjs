import Window from '../components/Window/Window'
import Search from '../components/Search/Search'
import Weather from '../components/Weather/Weather'
import { useState } from 'react'


function Home() {
  const [inputCity, setInputCity] = useState("")
  const [city, setCity] = useState("Moskow")
  const [weather, setWeather] = useState("")
  const [degreesCelsias, setDegreesCelsias] = useState("")

  return (
    <Window>
      <Search inputCity={inputCity} setInputCity={setInputCity} setCity={setCity} setDegreesCelsias={setDegreesCelsias} />
      <Weather city={city} degreesCelsias={degreesCelsias} />
    </Window>
  )
}

export default Home
