import Window from '../components/Window/Window'
import Search from '../components/Search/Search'
import Weather from '../components/Weather/Weather'

function Home() {
  return (
    <Window>
      <Search/>
      <Weather country="Москва"/>
    </Window>
  )
}

export default Home
