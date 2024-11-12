import {Link,Route,Switch} from 'react-router-dom'
import Home from './components/Home';
import Sub from './components/Sub';
import About from './components/About';

function App() {
  return (
    <div>
      <ul>
        {/* <li><a href='#'>home</a></li> */}
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/sub'>Sub</Link></li>
      </ul>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About}/>
        <Route path='/about' component={Sub}/>
        <Route path='/sub' component={Sub}/>
      </Switch>

      
    </div>
  );
}

export default App;
