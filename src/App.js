import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ArticlesPage from './pages/ArticlesPage';
import Article from './pages/Article';
import NavBar from './NavBar';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App" extends Component>
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/articles" component={ArticlesPage} />
            <Route path="/article/:name" component={Article} />
            <Route component={NotFound} />
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
