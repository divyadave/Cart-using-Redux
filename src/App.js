import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { uiActions } from './store/ui-slice';
import { sendCartData, fetchCartData } from './store/cart-actions';
let initial = true;

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state=> state.cart)
  const dispatch = useDispatch()
  const notification = useSelector(state => state.ui.notification)
  
  useEffect(() => {
    dispatch(fetchCartData())

  }, [dispatch])
  
  useEffect(()=> {
    if(initial) {
      initial = false;
      return;
    }
    dispatch(sendCartData(cart))
    
  
  }, [cart, dispatch])
  return (
    <>
    {notification && <Notification status={notification.status} title={notification.title} message={notification.message}></Notification>}
    <Layout>
      { showCart && <Cart/> }
      <Products></Products>
    </Layout>
    </>
  );
}

export default App;
