import {Link,Route,Switch} from 'react-router-dom'
import Home from './router4/Home';
import NotFile from './router4/NotFile';
import About from './router4/About';
import Profile from './router4/Profile';


function App() {
  return (
    <div>
      <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
      </ul>
      </nav>
      
      <Switch>
        <Route path='/'exact><Home/></Route>
        <Route path='/about'>{About}</Route>
        <Route path='/profile'><Profile/></Route>
        <Route path='*'><NotFile/></Route>
      </Switch>

      
    </div>
  );
}

export default App;
