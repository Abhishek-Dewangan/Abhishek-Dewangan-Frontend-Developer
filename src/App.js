import {Header} from '../src/Layouts/Header/Header';
import './App.css';
import {Banner} from './Components/Banner/Banner';
import {SearchForm} from './Components/SearchForm/SearchForm';
import {Footer} from './Layouts/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <SearchForm />
      <Footer />
    </div>
  );
}

export default App;
