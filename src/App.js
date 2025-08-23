import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Componets/Comp/Home';
import About from './Componets/Comp/About';
import Courses from './Componets/Comp/Courses';
import Contact from './Componets/Comp/Contact';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about/' element={<About/>}/>
        <Route path='courses/' element={<Courses/>}/>
        <Route path='contact/' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
