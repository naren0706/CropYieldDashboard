
import './App.css';
import BarChart from './components/BarChart';
import PieChart from "./components/PieChart";
import LineChart from './components/LineChart';

function App() {
  return (
    <div className="App" >
      <BarChart/>
      <PieChart/>
      <LineChart/>
    </div>
  );
}

export default App;
