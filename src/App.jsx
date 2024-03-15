
import './App.css'
import Banner from './Component/Banner/Banner'
import Navber from './Component/Navber/Navber'
import Recipes from './Component/Recipes/Recipes'

function App() {

  return (
    <div className='w-11/12 mx-auto'>
      <Navber></Navber>
      <Banner></Banner>
      <Recipes></Recipes>

   </div>
  )
}

export default App
