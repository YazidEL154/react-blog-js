import { BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import { HeaderBar } from './components/header/HeaderBar';
import { Routing } from './routing/Routing';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderBar/>
        <Routing/>
      </div>
    </BrowserRouter>
  );
}

export default App;
