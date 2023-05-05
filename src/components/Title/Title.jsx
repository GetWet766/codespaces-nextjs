import cls from './Title.module.css'

const Title = (props) => {
    return (
        <div className={cls.title}>
          {props.children}
        </div>
      )
}

export default Title