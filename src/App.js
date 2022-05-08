import './App.css';
import Register from './pages/Register';
import Rooter from './router/Rooter'
import Home from './pages/Home';
import useWindowSize from './hooks/useWindowSize';
import { Routes } from 'react-router-dom';


function App() {
  const [w] = useWindowSize(1920, 1080);
  return (
    <div className="App">
     <Rooter/>
    </div>
  );
}
export default App;
