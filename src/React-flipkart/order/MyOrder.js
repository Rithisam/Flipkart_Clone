import React ,{useState} from 'react';
import { useSelector } from 'react-redux';
import logo from '../images/logo1.png';
import grocery from '../images/grocery-store.png';
import { useNavigate} from 'react-router-dom';


const MyOrders = () => {
  const orders = useSelector((state) => state.order.orders);
  const [searchTerm, setSearchTerm] = useState('');
   const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      navigate(`/Filter/${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
  <div className="myorder-navbar">
  <nav>
    <img src={logo} alt="myorder-logo" className="myorder-logo" />
    <input
      type="text"
      placeholder="Search for Products, Brands and More"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyDown={handleKeyDown}
    />
    <button>Log in</button>
    <p className='myorder-sell'>Become a Seller</p>
    <p className='myorder-more'>More</p>
    <div className="myorder-cartcontainer" onClick={() => {}}>
      <img src={grocery} alt="cart-logo" className="myorder-cart" />
      <p>Cart</p>
    </div>
  </nav>
</div>

    <section className="section">
     

      <div className="orders-page">
        <aside className="orders-filters">
          <h2 className="filters-title">Filters</h2>
          <hr />
          <div className="filter-section">
            <h3 className="filter-label">ORDER STATUS</h3>
            <label><input type="checkbox" /> On the way</label>
            <label><input type="checkbox" /> Delivered</label>
            <label><input type="checkbox" /> Cancelled</label>
            <label><input type="checkbox" /> Returned</label>
            <hr />
          </div>
          <div className="filter-section">
            <h3 className="filter-label">ORDER TIME</h3>
            <label><input type="checkbox" /> Last 30 days</label>
            <label><input type="checkbox" /> 2024</label>
            <label><input type="checkbox" /> 2023</label>
            <label><input type="checkbox" /> 2022</label>
            <label><input type="checkbox" /> 2021</label>
            <label><input type="checkbox" /> Older</label>
          </div>
        </aside>

        <main className="orders-content">
          <div className="orders-search">
            <input type="text" placeholder="Search your orders here" />
            <button>Search Orders</button>
          </div>

          {orders.length === 0 ? (
            <div className="orders-empty-state">
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/emptyOrders_f13d28.png"
                alt="No orders"
              />
              <p>You have no orders</p>
              <button className="start-shopping-btn">Start Shopping</button>
            </div>
          ) : (
            <div className="orders-list">
              {orders.map((order) => (
                <div key={order.id} className="order-card">
                  
                  <ul className="order-items">
                    {order.items.map((item) => (
                      <li key={item.id} className="order-item">
                        <img src={item.image} alt={item.title} width={60} />
                        <div>
                          <p>{item.title}</p>
                          <p>Quantity: {item.quantity}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="order-header">
                    
                    <p><strong>Date:</strong> {order.date}</p>
                    <p><strong>Total:</strong> ${order.total}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </section>
    </div>
  );
};

export default MyOrders;
