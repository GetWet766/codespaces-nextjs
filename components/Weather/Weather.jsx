import cls from './Weather.module.css'

import Title from '../Title/Title'
import Degree from '../Degree/Degree'

import navIcon from '../../img/navigation-arrow.png'

import clearDay from '../../img/01d.svg'
import clearNight from '../../img/01n.svg'
import fewCloudsDay from '../../img/02d.svg'
import fewCloudsNight from '../../img/02n.svg'
import cloudsDay from '../../img/03d.svg'
import cloudsNight from '../../img/03n.svg'
import brokenCloudsDay from '../../img/04d.svg'
import brokenCloudsNight from '../../img/04n.svg'
import smallRainDay from '../../img/09d.svg'
import smallRainNight from '../../img/09n.svg'
import rainDay from '../../img/10d.svg'
import rainNight from '../../img/10n.svg'
import thunderstormDay from '../../img/11d.svg'
import thunderstormNight from '../../img/11n.svg'
import snowDay from '../../img/13d.svg'
import snowNight from '../../img/13n.svg'
import mistDay from '../../img/50d.svg'
import mistNight from '../../img/50n.svg'

const Weather = ({city, degreesCelsias, weather, autoLocation, humidity, localTime, rain}) => {
    var weaterImage
    switch (weather) {
        case "01d":
            weaterImage = clearDay.src;
            break;
        case "01n":
            weaterImage = clearNight.src;
            break;
        case "02d":
            weaterImage = fewCloudsDay.src;
            break;
        case "02n":
            weaterImage = fewCloudsNight.src;
            break;
        case "03d":
            weaterImage = cloudsDay.src;
            break;
        case "03n":
            weaterImage = cloudsNight.src;
            break;
        case "04d":
            weaterImage = brokenCloudsDay.src;
            break;
        case "04n":
            weaterImage = brokenCloudsNight.src;
            break;
        case "09d":
            weaterImage = smallRainDay.src;
            break;
        case "09n":
            weaterImage = smallRainNight.src;
            break;
        case "10d":
            weaterImage = rainDay.src;
            break;
        case "10n":
            weaterImage = rainNight.src;
            break;
        case "11d":
            weaterImage = thunderstormDay.src;
            break;
        case "11n":
            weaterImage = thunderstormNight.src;
            break;
        case "13d":
            weaterImage = snowDay.src;
            break;
        case "13n":
            weaterImage = snowNight.src;
            break;
        case "50d":
            weaterImage = mistDay.src;
            break;
        case "50n":
            weaterImage = mistNight.src;
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
                    <div className={cls.valueCategory}>{humidity}%</div>
                </div>
                <div>
                    <div className={cls.titleCategory}>Дождь</div>
                    <div className={cls.valueCategory}>{rain}мм</div>
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