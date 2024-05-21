
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from './components/Navbar'
import { Header } from './components/Header'
import { Section_1 } from './components/Section_1'
import { Section_img } from './components/Section_img'
import { Data_get } from './components/Data_get'
import { Big_sales } from './components/Big_sales'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header />
      <Section_1 />
      <Section_img />
      <Data_get />
      <Big_sales />
    </div> 



  )
}

export default App
