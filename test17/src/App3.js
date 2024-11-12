import {Link,Route,Switch} from 'react-router-dom'
import Home from './router2/Home';
import NotFile from './router1/NotFile';
import About from './router2/About';
import Profile from './router2/Profile';
import Front from './router2/Front';

const data = [
  {title:'html',info:'html에 대한 설명입니다'},
  {title:'css',info:'css에 대한 설명입니다'},
  {title:'javascript',info:'javascript에 대한 설명입니다'},
  {title:'react',info:'react에 대한 설명입니다'}
]

function App() {
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        
        <li><Link to='/front/html'>html</Link></li>
        <li><Link to='/front/css'>css</Link></li>
        <li><Link to='/front/javascript'>javascript</Link></li>
        <li><Link to='/front/react'>react</Link></li>

      </ul>
      <Switch>
        <Route path='/'exact><Home/></Route>
        <Route path='/about'>{About}</Route>
        <Route path='/profile'><Profile/></Route>
        <Route path='/front/:name'><Front data={data}/></Route>
        <Route path='*'><NotFile/></Route>
      </Switch>

      
    </div>
  );
}

export default App;
