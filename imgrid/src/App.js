import logo from './logo.svg';
import Grid from './Grid.jsx';
import Flexgrid from './Flexgrid';
import './Grid.css';
import './App.css';

function App() {
  return (
    <div>
      {/* <Flexgrid/> */}
      <Grid/>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
