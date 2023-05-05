function searchSubmit({ inputCity, setCity, setDegreesCelsias, setWeather, lat, lon, setAutoLocation, setHumidity }) {
  if (inputCity === "" & lat === "" & lon === "") return
  const API_KEY = "d551f5d509a0045cf8cdb61648300237"
  

  
  if (inputCity !== "" & lat === "" & lon === "")
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&lang=ru&appid=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        if (json.cod === "404") return
    
        console.log(json);
        setCity(json.name)
        setWeather(json.weather[0].main)
        setDegreesCelsias(parseInt(json.main.temp))
        setAutoLocation(false)
        setHumidity(parseInt(json.main.humidity))
      })
      .catch(reason => console.log(reason))
  if (inputCity === "" & lat !== "" & lon !== "")
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        if (json.cod === "404") return
    
        console.log(json);
        setCity(json.name)
        setWeather(json.weather[0].main)
        setDegreesCelsias(parseInt(json.main.temp))
        setAutoLocation(true)
        setHumidity(parseInt(json.main.humidity))
      })
      .catch(reason => console.log(reason))
}

export default searchSubmit