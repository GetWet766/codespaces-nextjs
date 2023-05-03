import cls from './Weather.module.css'

import Title from '../Title/Title'
import Degree from '../Degree/Degree'

import navIcon from '../../img/navigation-arrow.png'

import clear from '../../img/Clear.png'
import clouds from '../../img/Clouds.png'
import mist from '../../img/Mist.png'
import snow from '../../img/Snow.png'
import rain from '../../img/Rain.png'

const Weather = ({city, degreesCelsias, weather, autoLocation, humidity, localTime}) => {
    var weaterImage
    switch (weather) {
        case "Clear":
            weaterImage = clear.src;
            break;
        case "Clouds":
            weaterImage = clouds.src;
            break;
        case "Mist":
            weaterImage = mist.src;
            break;
        case "Snow":
            weaterImage = snow.src;
            break;
        case "Rain":
            weaterImage = rain.src;
            break;
        default:
            weaterImage = "";
            break;
    }
    return (
        <div className={cls.weather}>
            <div className={cls.weatherImg}>
                <img src={weaterImage} alt="" />
            </div>
            <Title>
                {city}
                {autoLocation && <img className={cls.imgNavigation} src={navIcon.src} alt="" />}
            </Title>
            <div className={cls.celsius}>
                {degreesCelsias}
                <Degree/>
            </div>
            <div className={cls.information}>
                <div>
                    <div className={cls.titleCategory}>Время</div>
                    <div className={cls.valueCategory}>{calcTime(localTime)}</div>
                </div>
                <div>
                    <div className={cls.titleCategory}>Влажность</div>
                    <div className={cls.valueCategory}>{humidity}</div>
                </div>
                <div>
                    <div className={cls.titleCategory}>Дождь</div>
                    <div className={cls.valueCategory}>58%</div>
                </div>
                <div>
                    <div className={cls.titleCategory}>AQ</div>
                    <div className={cls.valueCategory}>22</div>
                </div>
            </div>
        </div>
      )
}

function calcTime(offset) {
    if (offset === "?") return "00:00"
    var d = new Date()
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000)
    var nd = new Date(utc + (1000*offset))
    return nd.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })
}

export default Weather