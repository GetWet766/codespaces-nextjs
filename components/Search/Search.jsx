import cls from './Search.module.css'

import img from '../../img/search-icon.png'

const Search = () => {
    return (
        <div className={cls.search}>
            <input
                type="text"
                name="search"
                className={cls.searchInput}
                id="search-input"
                placeholder="Поиск города"
            />
            <div className={cls.buttonSearch}>
                <img src={img.src} alt="" />
            </div>
        </div>
      )
}

export default Search