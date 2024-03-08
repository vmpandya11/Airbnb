import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Host from './Host/Host';
import Host2 from './Host/Host2';
import Gradiant from './Components/Gradiant/Gradiant'
import Flat from './Components/Flat/Flat';
import Rental from './Components/Rental/Rental'
import CardDetails from './Components/CardDetails/CardDetails'
import ImageList from './Components/ImagesList/ImageList'
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/host" element={<Host />} />
          <Route path="/host2" element={<Host2 />} />
          <Route path="/gradiant" element={<Gradiant />} />
          <Route path="/Flat" element={<Flat />} />
          <Route path="/Rental" element={<Rental />} />
          <Route path="/CardDetails/:cardid" element={<CardDetails />} />
          <Route path="/ImageList" element={<ImageList />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

