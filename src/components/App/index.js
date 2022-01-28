import './app.scss';

import Header from '../Header';
import Home from '../Home';
import Footer from '../Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;