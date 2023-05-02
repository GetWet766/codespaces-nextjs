import cls from './Weather.module.css'

import Title from '../Title/Title'
import Degree from '../Degree/Degree'

import imgWeather from '../../img/cloudy-icon.png'
import navIcon from '../../img/navigation-arrow.png'

const Weather = ({city, degreesCelsias}) => {
    return (
        <div className={cls.weather}>
            <div className={cls.weatherImg}>
                <img src={imgWeather.src} alt="" />
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