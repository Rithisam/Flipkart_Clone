
import { combineReducers } from 'redux';
import cartReducer from './CartReducer';
import orderReducer from './OrderReducer';
import wishlistReducer from './wishlistReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  order: orderReducer,
  wishlist: wishlistReducer, 
});

export default rootReducer;
