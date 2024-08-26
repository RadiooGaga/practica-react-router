import { Routes, Route} from 'react-router-dom'
import './App.css'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Header from './components/Header/Header'
import NotFoundPage from './pages/NotFound/NotFound'


function App() {

  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/contact/:title" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
        
    </div>
  )
}
export default App

