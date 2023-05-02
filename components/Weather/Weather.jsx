import cls from './Weather.module.css'

import Title from '../Title/Title'
import Degree from '../Degree/Degree'

import navIcon from '../../img/navigation-arrow.png'
import clouds from '../../img/Clouds.png'

const Weather = ({city, degreesCelsias, weather}) => {
    return (
        <div className={cls.weather}>
            <div className={cls.weatherImg}>
                <img src={weather == "Clouds" ? clouds.src : ""} alt="" />
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