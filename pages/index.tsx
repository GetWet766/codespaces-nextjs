import React from 'react'

import Window from '../components/Window/Window'
import Search from '../components/Search/Search'
import Weather from '../components/Weather/Weather'

import manifest from "../hooks/manifest";
import favicons from "../hooks/favicons";

import getWeather from '../hooks/getWeather'

import Head from 'next/head'

import { useEffect, useState } from 'react'
import { useGeolocated } from "react-geolocated";

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

        <link type="image/x-icon" rel="shortcut icon" href={favicons.favicon} />

        <link type="image/png" sizes="16x16" rel="icon" href={favicons.favicon16} />
        <link type="image/png" sizes="32x32" rel="icon" href={favicons.favicon32} />
        <link type="image/png" sizes="96x96" rel="icon" href={favicons.favicon96} />
        <link type="image/png" sizes="120x120" rel="icon" href={favicons.favicon120} />

        <link sizes="57x57" rel="apple-touch-icon" href={favicons.faviconApple57} />
        <link sizes="60x60" rel="apple-touch-icon" href={favicons.faviconApple60} />
        <link sizes="72x72" rel="apple-touch-icon" href={favicons.faviconApple72} />
        <link sizes="76x76" rel="apple-touch-icon" href={favicons.faviconApple76} />
        <link sizes="114x114" rel="apple-touch-icon" href={favicons.faviconApple114} />
        <link sizes="120x120" rel="apple-touch-icon" href={favicons.faviconApple120} />
        <link sizes="144x144" rel="apple-touch-icon" href={favicons.faviconApple144} />
        <link sizes="152x152" rel="apple-touch-icon" href={favicons.faviconApple152} />
        <link sizes="180x180" rel="apple-touch-icon" href={favicons.faviconApple180} />

        <meta name="msapplication-TileImage" content={favicons.faviconMSTile} />
        <meta name="msapplication-square70x70logo" content={favicons.faviconMS70} />
        <meta name="msapplication-square150x150logo" content={favicons.faviconMS150} />
        <meta name="msapplication-wide310x150logo" content={favicons.faviconMS310} />

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="application-name" content="Погода" />
      </Head>
      <Search setWeather={setWeather} inputCity={inputCity} setInputCity={setInputCity} setCity={setCity} setDegreesCelsias={setDegreesCelsias} setAutoLocation={setAutoLocation} setHumidity={setHumidity} setLocalTime={setLocalTime} setRain={setRain} />
      <Weather city={city} degreesCelsias={degreesCelsias} weather={weather} autoLocation={autoLocation} humidity={humidity} localTime={localTime} rain={rain} />
    </Window>
  )
}

export default Home
