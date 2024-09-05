import Navbar from './NavBar';
import Home from './Home';
import Preloader from './component/Preloader';

function App() {
  return (
    <>
    <Preloader />
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
    </>
  );
}

export default App;
