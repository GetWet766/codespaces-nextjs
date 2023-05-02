import Window from '../components/Window/Window'
import Search from '../components/Search/Search'
import Weather from '../components/Weather/Weather'
import getWeather from '../hooks/getWeather'
import Head from 'next/head'
import { useState, useEffect } from 'react'
var used = false

function Home() {
  const [inputCity, setInputCity] = useState("")
  const [city, setCity] = useState("Москва")
  const [weather, setWeather] = useState("Clouds")
  const [degreesCelsias, setDegreesCelsias] = useState("?")

  if (!used) {
    useEffect(() => {
      getWeather(city, setCity, setDegreesCelsias, setWeather)
    })
    used = true
    console.log(used);
  }
  
  return (
    <Window>
      <Head>
        <title>Прогноз погоды</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Search setWeather={setWeather} inputCity={inputCity} setInputCity={setInputCity} setCity={setCity} setDegreesCelsias={setDegreesCelsias} />
      <Weather city={city} degreesCelsias={degreesCelsias} weather={weather} />
    </Window>
  )
}

export default Home
