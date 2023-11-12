import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import { Provider } from 'react-redux';
import store from './Store/Store'; // Import your Redux store
import all_product from './Components/Assets/all_product';
import OrderSuccess from './Pages/OrderSuccess';
import LoginPage from './Pages/LoginPage';
import NavBarGeneric from './Components/NavBarGeneric/NavBarGeneric';
import ProductModify from './Pages/ProductModify';
import ProductCrud from './Pages/ProductCrud';
import OrderModify from './Pages/OrderModify';
import OrderCrud from './Pages/OrderCrud';
import LeftNavigation from './Components/LeftNavigation/LeftNavigation';
import ProductCategory from './Pages/ProductCategory';
import ViewOrderPage from './Pages/ViewOrderPage';
import CancelOrderPage from './Pages/CancelOrderPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <NavBarGeneric/>
        <div className='main-content'>
          <LeftNavigation/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/smartdoorbell' element={<ShopCategory category="smartdoorbell" />} />
          <Route path='/smartdoorlock' element={<ShopCategory category="smartdoorlock" />} />
          <Route path='/smartspeaker' element={<ShopCategory category="smartspeaker" />} />
          <Route path='/smartlighting' element={<ShopCategory category="smartlighting" />} />
          <Route path='/smartthermostat' element={<ShopCategory category="smartthermostat" />} />
          <Route path='/' element={<Home />} />
          <Route path='/ConsoleList' element={<ProductCategory category="smartdoorbell" />} />
          <Route path='/GamesList' element={<ProductCategory category="smartdoorlock" />} />
          <Route path='/TabletList' element={<ProductCategory category="smartspeaker" />} />
          <Route path='/LightingList' element={<ProductCategory category="smartlighting" />} />
          <Route path='/ThermostatList' element={<ProductCategory category="smartthermostat" />} />
          <Route path='/AccessoryList' element={<ProductCategory category="accessory" />} />


          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} /> {/* No need to pass cart and items here */}
          <Route path='/orders' element={<OrderSuccess/>}/>
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/loginPage' element={<LoginPage/>}/>
          <Route path='/addproduct' element={<ProductModify productUpdate="add" />}/>
          <Route path='/updateproduct' element={<ProductModify productUpdate="update" />}/>
          <Route path='/deleteproduct' element={<ProductModify productUpdate="delete" />}/>
          <Route path='/productadded' element={<ProductCrud productUpdate="added" />}/>
          <Route path='/productupdated' element={<ProductCrud productUpdate="updated" />}/>
          <Route path='/productdeleted' element={<ProductCrud productUpdate="deleted" />}/>
          <Route path='/addorder' element={<OrderModify orderUpdate="add" />}/>
          <Route path='/updateorder' element={<OrderModify orderUpdate="update" />}/>
          <Route path='/deleteorder' element={<OrderModify orderUpdate="delete" />}/>
          <Route path='/orderadded' element={<OrderCrud orderUpdate="added" />}/>
          <Route path='/orderupdated' element={<OrderCrud orderUpdate="updated" />}/>
          <Route path='/orderdeleted' element={<OrderCrud orderUpdate="deleted" />}/>
          <Route path='/viewOrderPage' element={<ViewOrderPage/>}/>
          <Route path='/cancelOrderPage' element={<CancelOrderPage/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
