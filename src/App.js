import './App.css';
import Rooter from './router/Rooter'
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
