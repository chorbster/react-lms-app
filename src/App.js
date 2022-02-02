import "./App.css"
import "./components/FontawsomeIcons/Index"
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Dashboard/>} />
          </Routes>
        </BrowserRouter>
      </>
  </div>
}

export default App;
