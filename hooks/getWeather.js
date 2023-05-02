function searchSubmit(inputCity, setCity, setDegreesCelsias, setWeather) {
    if (inputCity === "") return
    //const API_KEY = "d551f5d509a0045cf8cdb61648300237"
    const API_KEY = "63bc5f767bb26efd2479feeb31464fb7"
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        if (json.code === "404") {
          return
        }
    
        //setCity(inputCity)
        console.log(json);
        //setWeather(json.weather[0].main)
        //setDegreesCelsias(parseInt(json.main.temp))
    })
}

export default searchSubmit