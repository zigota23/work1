import './App.css';
import Header from './Components/Header/Header.js';
import About from './Components/About/About.js';
import Work from './Components/Work/Work.js';
import People from './Components/People/People.js';



function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Work/>
      <People/>
    </div>
  );
}

export default App;
