function searchSubmit(inputCity, setCity, setDegreesCelsias, setWeather) {
    if (inputCity === "") return
    const API_KEY = "d551f5d509a0045cf8cdb61648300237"
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&lang=ru&appid=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        if (json.cod === "404") return
    
        console.log(json);
        setCity(json.name)
        setWeather(json.weather[0].main)
        setDegreesCelsias(parseInt(json.main.temp))
      })
      .catch(reason => console.log(reason))
}

export default searchSubmit