import cls from './Weather.module.css'

import Title from '../Title/Title'
import Degree from '../Degree/Degree'

import navIcon from '../../img/navigation-arrow.png'

import clear from '../../img/Clear.png'
import clouds from '../../img/Clouds.png'
import mist from '../../img/Mist.png'
import snow from '../../img/Snow.png'
import rain from '../../img/Rain.png'

const Weather = ({city, degreesCelsias, weather}) => {
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
                <img className={cls.imgNavigation} src={navIcon.src} alt="" />
            </Title>
            <div className={cls.celsius}>
                {degreesCelsias}
                <Degree/>
            </div>
        </div>
      )
}

export default Weather