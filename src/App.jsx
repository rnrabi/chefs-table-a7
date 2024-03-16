
import './App.css'
import Banner from './Component/Banner/Banner'
import Navber from './Component/Navber/Navber'
import Recipes from './Component/Recipes/Recipes'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className='w-11/12 mx-auto'>
      <Navber></Navber>
      <Banner></Banner>
      <Recipes></Recipes>
      <ToastContainer />
   </div>
  )
}

export default App
