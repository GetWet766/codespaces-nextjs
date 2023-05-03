interface GetWeatherProps {
    inputCity?: string,
    lat?: string | number,
    lon?: string | number,
    setAutoLocation: Function,
    setWeather: Function,
    setCity: Function,
    setDegreesCelsias: Function,
    setHumidity: Function,
    setLocalTime: Function
}

interface WeatherDataObject {
    base: string,
    clouds: {
        all:  number
    }
    cod: number | string,
    coord: {
        lon:  number,
        lat:  number
    },
    dt:  number,
    id:  number,
    main: {
        feels_like:  number,
        humidity:  number,
        pressure:  number,
        temp:  number,
        temp_max:  number,
        temp_min:  number
    },
    name: string,
    sys: {
        country: string,
        id:  number,
        sunrise:  number,
        sunset:  number,
        type:  number
    },
    timezone:  number,
    visibility:  number,
    weather: [
        {
            description: string,
            icon: string,
            id:  number,
            main: string
        }
    ],
    wind: {
        deg:  number,
        speed:  number
    }
}

function getWeather({inputCity, lon, lat, setCity, setDegreesCelsias, setWeather, setAutoLocation, setHumidity, setLocalTime}: GetWeatherProps): void {
    if (!inputCity && !lat && !lon) return
    const API_KEY: string = "d551f5d509a0045cf8cdb61648300237"
    
    if (inputCity && !lat && !lon)
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&lang=ru&appid=${API_KEY}`)
        .then(response => response.json())
        .then((json: WeatherDataObject) => {
            console.log(json);
          if (json.cod === "404") return
      
          setWeather(json.weather[0].icon)
          setCity(json.name)
          setAutoLocation(false)
          setDegreesCelsias(Math.round(json.main.temp))
          setLocalTime(json.timezone)
          setHumidity(Math.round(json.main.humidity))
        })
        .catch(reason => console.log(reason))
    if (!inputCity && lat && lon)
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=${API_KEY}`)
        .then(response => response.json())
        .then((json: WeatherDataObject) => {
            console.log(json);
          if (json.cod === "404") return
      
          setWeather(json.weather[0].icon)
          setCity(json.name)
          setAutoLocation(true)
          setDegreesCelsias(Math.round(json.main.temp))
          setLocalTime(json.timezone)
          setHumidity(Math.round(json.main.humidity))
        })
        .catch(reason => console.log(reason))
  }
  
  export default getWeather