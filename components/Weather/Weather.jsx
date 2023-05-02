import cls from './Weather.module.css'

import Title from '../Title/Title'
import Degree from '../Degree/Degree'

import imgWeather from '../../img/cloudy-icon.png'
import navIcon from '../../img/navigation-arrow.png'

const Weather = ({country}) => {
    return (
        <div className={cls.weather}>
            <div className={cls.weatherImg}>
                <img src={imgWeather.src} alt="" />
            </div>
            <Title>
                {country}
                <img className={cls.imgNavigation} src={navIcon.src} alt="" />
            </Title>
            <div className={cls.celsius}>
                31
                <Degree/>
            </div>
        </div>
      )
}

export default Weather