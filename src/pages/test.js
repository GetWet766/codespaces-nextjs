import Window from '../components/Window/Window'
import Search from '../components/Search/Search'
import Weather from '../components/Weather/Weather'

import getWeather from '../hooks/getWeather'

import Head from 'next/head'

import { useEffect, useState } from 'react'
import { useGeolocated } from "react-geolocated";

function Home() {
  const [autoLocation, setAutoLocation] = useState(false)
  const [inputCity, setInputCity] = useState("")
  const [city, setCity] = useState("?")
  const [weather, setWeather] = useState("Clouds")
  const [degreesCelsias, setDegreesCelsias] = useState("?")
  const [humidity, setHumidity] = useState("?")
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
     userDecisionTimeout: 5000,
  })
  
  useEffect(() => {
    !isGeolocationAvailable ? null :
      !isGeolocationEnabled ? null :
        !coords ? null :
          getWeather({
            setCity: setCity,
            setDegreesCelsias: setDegreesCelsias,
            setWeather: setWeather,
            lat: coords.latitude,
            lon: coords.longitude,
            setAutoLocation: setAutoLocation,
            setHumidity: setHumidity
          })
  }, [coords, isGeolocationAvailable, isGeolocationEnabled])

  return (
    <Window>
      <Head>
        <title>Прогноз погоды</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Search setWeather={setWeather} inputCity={inputCity} setInputCity={setInputCity} setCity={setCity} setDegreesCelsias={setDegreesCelsias} setAutoLocation={setAutoLocation} />
      <Weather city={city} degreesCelsias={degreesCelsias} weather={weather} autoLocation={autoLocation} humidity={humidity} />
    </Window>
  )
}

export default Home
