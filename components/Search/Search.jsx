import cls from './Search.module.css'

import img from '../../img/search-icon.png'
import getWeather from '../../hooks/getWeather'

const Search = ({setWeather, inputCity, setInputCity, setCity, setDegreesCelsias, setAutoLocation, setHumidity}) => {
    return (
        <div className={cls.search}>
            <input
                type="text"
                name="search"
                className={cls.searchInput}
                id="search-input"
                placeholder="Поиск города"
                onChange={(e) => setInputCity(e.target.value)}
                onKeyDown={(e) => {if (e.keyCode === 13) getWeather({
                    inputCity: inputCity,
                    setCity: setCity,
                    setDegreesCelsias: setDegreesCelsias,
                    setWeather: setWeather,
                    setAutoLocation: setAutoLocation,
                    setHumidity: setHumidity
                })}}
            />
            <div className={cls.buttonSearch} id="search-button" onClick={() => getWeather({
                inputCity: inputCity,
                setCity: setCity,
                setDegreesCelsias: setDegreesCelsias,
                setWeather: setWeather,
                setAutoLocation: setAutoLocation,
                setHumidity: setHumidity
            })}>
                <img src={img.src} alt="" />
            </div>
        </div>
    )
}

export default Search