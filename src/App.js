
import './App.css';
import Chart from './companent/BarChart';
import PieChart from "./companent/PieChart";

function App() {
  return (
    <div className="App" >
      <Chart/>

      <br>
      </br>
      <div style={{height:'64vh' , width:'64vh'}}>
      <PieChart/>
      </div>
    </div>
  );
}

export default App;
