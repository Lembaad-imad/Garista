import { useState } from 'react'
import SplashScreen from './Splash screen/SplashScreen'
import LoadingPage from './Loading page/LoadingPage'
import ChoseLanguage from './Language Chose/ChoseLanguage'
import HomePage from './Home/HomePage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


function App() {

  return (
    <>
       <Router>
  
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/loadingpage" element={<LoadingPage />} />
        <Route path="/choselanguage" element={<ChoseLanguage />} />
        <Route path="/hompage" element={<HomePage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
