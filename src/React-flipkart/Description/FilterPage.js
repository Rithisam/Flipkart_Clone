import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../Wishlist/WishlistActions';
import '../../App.css';
import logo from '../images/logo1.png';
import grocery from '../images/grocery-store.png';
import star from '../images/star.png';
import kart from '../images/kart-logo.png';
import heart from '../images/heart.png';
import heartFilled from '../images/heart-filled.png'; // Add this image
import Footer from '../Home/footer';

export default function FilterPage() {
  const [things, setThings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [minRating, setMinRating] = useState(0);

  const { param } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const categories = [
    "men's clothing",
    "women's clothing",
    'jewelery',
    'electronics',
  ];

  useEffect(() => {
    const lowerParam = decodeURIComponent(param).toLowerCase();
    if (categories.includes(lowerParam)) {
      fetch(`https://fakestoreapi.com/products/category/${lowerParam}`)
        .then((res) => res.json())
        .then((data) => {
          setThings(data);
          setSearchTerm('');
        });
    } else {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
          setThings(data);
          setSearchTerm(lowerParam);
        });
    }
  }, [param]);

  const handleDetailClick = (id) => {
    navigate(`/Desc/${id}`);
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleWishlistToggle = (item, event) => {
    event.stopPropagation(); // Prevent navigation
    const isInWishlist = wishlistItems.some((wishItem) => wishItem.id === item.id);
    if (isInWishlist) {
      dispatch(removeFromWishlist(item.id));
    } else {
      dispatch(addToWishlist(item));
    }
  };

  const filteredThings = things.filter((item) => {
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(item.category);
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = item.price <= maxPrice;
    const matchesRating = item.rating?.rate >= minRating;

    return matchesCategory && matchesSearch && matchesPrice && matchesRating;
  });

  return (
    <div>
      <div className="filter-navbar">
        <nav>
          <img src={logo} alt="filter-logo" className="filterlogo" />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>Log in</button>
          <p>Become a Seller</p>
          <p>More</p>
          <div className="filter-cartcontainer" onClick={() => {}}>
            <img src={grocery} alt="cart-logo" className="filter-cart" />
            <p>Cart</p>
          </div>
        </nav>
      </div>

      <div className='menu-select'>
        <h5>Electronics</h5>
        <h5>TVs & Appliances</h5>
        <h5>Men</h5>
        <h5>Women</h5>
        <h5>Baby & Kids</h5>
        <h5>Home & Furniture</h5>
        <h5>Sports, Books & More</h5>
        <h5>Flights</h5>
        <h5>Offer Zone</h5>
        <h5>Grocery</h5>
      </div>

      <div className="filter-container">
        <div className="filter-sidebar">
          <h3>Filters</h3>

          <div className="filter-section">
            <hr />
            <label>Search</label><br />
            <input
              type="text"
              placeholder="Search title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-section">
            <hr />
            <h4>Category</h4>
            {categories.map(cat => (
              <div key={cat}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => handleCategoryChange(cat)}
                  />
                  {' '}{cat}
                </label>
              </div>
            ))}
          </div>

          <div className="filter-section">
            <hr />
            <h4>Max Price: ${maxPrice}</h4>
            <input
              type="range"
              min="0"
              max="1000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>

          <div className="filter-section">
            <hr />
            <h4>Min Rating: {minRating}⭐</h4>
            <input
              type="range"
              min="0"
              max="5"
              step="0.5"
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
            />
          </div>
        </div>

      <div className="filter-products">
        {filteredThings.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredThings.map((thing) => {
            const isInWishlist = wishlistItems.some((item) => item.id === thing.id);
            return (
              <div
                className="product-card"
                key={thing.id}
                onClick={() => handleDetailClick(thing.id)}
              >
                <img
                  src={isInWishlist ? heartFilled : heart}
                  alt="heart"
                  className="heart-icon"
                  onClick={(e) => handleWishlistToggle(thing, e)}
                />
                <img src={thing.image} alt={thing.title} />
                <h4>{thing.title}</h4>
                <div className="people-review">
                  <div className="people-star">
                    <p>{thing.rating.rate}</p>
                    <img src={star} alt="star" />
                  </div>
                  <p className="people-count">({thing.rating.count})</p>
                  <img src={kart} alt="kart" className="kart" />
                </div>
                <p className="people-price">
                  ${thing.price} <span>$200.00</span>
                </p>
                <p className="people-offer">Bank Offer</p>
              </div>
            );
          })
        )}
      </div>
      </div>
      <Footer />
    </div>
   
  );
};