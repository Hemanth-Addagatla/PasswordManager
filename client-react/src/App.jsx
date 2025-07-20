import Navbar from './Utils/Navbar/Navbar'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from './Utils/main/Main';
import Footer from './Utils/footer/Footer'


function App() {
  
  return (
    <>
      <Navbar image={reactLogo} style/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
