import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import Article from './pages/Article';

function App() {
  return (
    <Router>
      <div className="App">
        <div id="page-body">
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} exact/>
          <Route path="/articles" component={Articles} exact/>
          <Route path="/article" component={Article} exact/>
        </div>
    </div>
    </Router>
  );
}

export default App;
