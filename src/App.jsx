import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import GlobalStyle from './components/GlobalStyle';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import Work from './pages/Work';

function App() {
  return (
    <GlobalStyle>
      <div>
        <Router basename='/'>
          <Routes>
            <Route path='/' element={ <Homepage /> } />
            <Route path='/the-contact' element={ <Contact /> } />
            <Route path='/the-work' element={ <Work /> } />
          </Routes>
        </Router>
      </div>
    </GlobalStyle>
  );
}

export default App;
