import cls from './Window.module.css'

const Window = (props) => {
    return (
        <div className={cls.window}>
          {props.children}
        </div>
      )
}

export default Window