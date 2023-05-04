import React from 'react'

import Window from '../components/Window/Window'
import Search from '../components/Search/Search'
import Weather from '../components/Weather/Weather'

import manifest from "../hooks/manifest";

import getWeather from '../hooks/getWeather'

import Head from 'next/head'

import { useEffect, useState } from 'react'
import { useGeolocated } from "react-geolocated";
import { useRouter } from 'next/router';

function Home() {
  const [inputCity, setInputCity] = useState("")
  const [weather, setWeather] = useState("Clouds")
  const [city, setCity] = useState("?")
  const [autoLocation, setAutoLocation] = useState(false)
  const [degreesCelsias, setDegreesCelsias] = useState("?")
  const [localTime, setLocalTime] = useState("?")
  const [humidity, setHumidity] = useState("?")
  const [rain, setRain] = useState("?")
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
     userDecisionTimeout: 5000,
  })
  
  useEffect(() => {
    !isGeolocationAvailable ?
      getWeather({
        inputCity: "Москва",
        setAutoLocation: setAutoLocation,
        setWeather: setWeather,
        setCity: setCity,
        setDegreesCelsias: setDegreesCelsias,
        setHumidity: setHumidity,
        setLocalTime: setLocalTime,
        setRain: setRain
      }) :
      !isGeolocationEnabled ?
        getWeather({
          inputCity: "Москва",
          setAutoLocation: setAutoLocation,
          setWeather: setWeather,
          setCity: setCity,
          setDegreesCelsias: setDegreesCelsias,
          setHumidity: setHumidity,
          setLocalTime: setLocalTime,
          setRain: setRain
        }) :
        !coords ? null :
          getWeather({
            lat: coords.latitude,
            lon: coords.longitude,
            setAutoLocation: setAutoLocation,
            setWeather: setWeather,
            setCity: setCity,
            setDegreesCelsias: setDegreesCelsias,
            setHumidity: setHumidity,
            setLocalTime: setLocalTime,
            setRain: setRain
          })
  }, [coords, isGeolocationAvailable, isGeolocationEnabled])

  return (
    <Window>
      <Head>
        <title>Прогноз погоды</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="manifest" href={"data:application/json;charset=utf-8," + encodeURIComponent(manifest())} />
      </Head>
      <Search setWeather={setWeather} inputCity={inputCity} setInputCity={setInputCity} setCity={setCity} setDegreesCelsias={setDegreesCelsias} setAutoLocation={setAutoLocation} setHumidity={setHumidity} setLocalTime={setLocalTime} setRain={setRain} />
      <Weather city={city} degreesCelsias={degreesCelsias} weather={weather} autoLocation={autoLocation} humidity={humidity} localTime={localTime} rain={rain} />
    </Window>
  )
}

export default Home
