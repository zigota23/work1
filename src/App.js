import './App.css';
import Header from './Components/Header/Header.js';
import Content from './Components/Content/Content.js';
import Footer from './Components/Footer/Footer.js';
import {BrowserRouter} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header/>
          <Content/>
          <Footer/>
      </div>
     </BrowserRouter> 
  );
}

export default App;
