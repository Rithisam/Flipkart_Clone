import React, { useState, useEffect } from 'react';
import '../../App.css';


const images = [
  'https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/7fc9f5a23c49764e.jpg?q=20',
  'https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/f0c7a0465bd092fb.jpg?q=20',
  'https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/b03409919baf3392.jpg?q=20',
  'https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/74f0ad81e44e6e6f.jpg?q=20',
  'https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/9f1d5aca207ca395.jpg?q=20'
  
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 2000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='image-show' style={{ textAlign: 'center' }}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
    </div>
  );
}

