import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import HomePage from './routs/homePage';
import RouteWraper from './routs/routes';

function App() {
  return (
    <div>
      <Header />
      {/* <HomePage /> */}
      <RouteWraper />
      <Footer />
    </div>
  );
}

export default App;