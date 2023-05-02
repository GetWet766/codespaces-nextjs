import cls from './Search.module.css'

import img from '../../img/search-icon.png'

const Search = ({inputCity, setInputCity, setCity, setDegreesCelsias}) => {
    return (
        <div className={cls.search}>
            <input
                type="text"
                name="search"
                className={cls.searchInput}
                id="search-input"
                placeholder="Поиск города"
                onChange={(e) => setInputCity(e.target.value)}
            />
            <div className={cls.buttonSearch} id="search-button" onClick={() => searchSubmit(inputCity, setCity, setDegreesCelsias)}>
                <img src={img.src} alt="" />
            </div>
        </div>
    )
}

function searchSubmit(inputCity, setCity, setDegreesCelsias) {
    if (inputCity === "") return
    const API_KEY = "d551f5d509a0045cf8cdb61648300237"
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        if (json.code === "404") {
          return
        }
    
        setCity(inputCity)

        console.log(json);

        //setDegreesCelsias(parseInt(json.main.temp))
    })
  }

export default Search