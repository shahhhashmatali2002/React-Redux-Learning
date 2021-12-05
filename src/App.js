import logo from './logo.svg';
import './App.css';
import HomeContainer from './Container/HomeContainer';
import HeaderContainer from './Container/HeaderContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <HomeContainer/>
    </div>
  );
}

export default App;
