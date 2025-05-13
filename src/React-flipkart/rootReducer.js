
import { combineReducers } from 'redux';
import cartReducer from './Cart/CartReducer';
import orderReducer from './order/OrderReducer';
import wishlistReducer from './Wishlist/wishlistReducer';


const rootReducer = combineReducers({
  cart: cartReducer,
  order: orderReducer,
  wishlist: wishlistReducer, 
});

export default rootReducer;
