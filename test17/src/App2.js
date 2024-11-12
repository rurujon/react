import {Link,Route,Switch} from 'react-router-dom'
import Home from './components/Home';
import Ceo from './router1/Ceo';
import Sub1 from './router1/Sub1';
import Sub2 from './router1/Sub2';
import NotFile from './router1/NotFile';

function App() {
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/ceo'>Ceo</Link></li>
        <li><Link to='/sub1'>Sub1</Link></li>
        <li><Link to='/sub2'>Sub2</Link></li>
      </ul>
      <Switch>
        <Route path='/'exact><Home/></Route>
        <Route path='/ceo'>{Ceo}</Route>
        <Route path='/sub1'><Sub1/></Route>
        <Route path='/sub2'><Sub2/></Route>
        <Route path='*'><NotFile/></Route>
      </Switch>

      
    </div>
  );
}

export default App;
