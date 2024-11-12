import {Link,Route,Switch} from 'react-router-dom'
import Home from './router3/Home';
import NotFile from './router3/NotFile';
import About from './router3/About';
import Profile from './router3/Profile';


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
