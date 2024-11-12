import {Link,Route,Switch} from 'react-router-dom'
import Product from './router6/Product';
import Main from './router6/Main';
import ProductDetail from './router6/ProductDetail';
import NotProduct from './router6/NotProduct';


function App() {
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
      </ul>
      
      <Switch>
        <Route path={['/','/main']} exact><Main/></Route>
        <Route path='/products' exact><Product/></Route>
        <Route path='/products/:productID' exact><ProductDetail/></Route>
        <Route path='*'><NotProduct/></Route>
      </Switch>

      
    </div>
  );
}

export default App;
