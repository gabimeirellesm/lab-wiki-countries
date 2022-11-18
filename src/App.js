import Navbar from './components/Navbar';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <CountriesList/>
    <CountryDetails/>

    </div>
  );
}

export default App;
