
import './App.css';
import Buttum from './components/Buttum';
import Cart from './components/Cart';
import Introduce from './components/Introduce';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Introduce/>
      <Cart/>
      <Buttum/>
    </div>
  );
}

export default App;
