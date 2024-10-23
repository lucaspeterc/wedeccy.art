// components/ScrollUpButton.js

'use client';

import { useState, useEffect } from 'react';

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down 100px from the top
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the window to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={styles.scrollButton}
        >
          ↑
        </button>
      )}
    </div>
  );
};

// Inline styles for the button
const styles = {
  scrollButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: '100',
    backgroundColor: 'white',
    color: 'black',
    border: 'none',
    padding: '15px',
    borderRadius: '50%',
    fontSize: '20px',
    cursor: 'pointer',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
  },
};

export default ScrollUpButton;
