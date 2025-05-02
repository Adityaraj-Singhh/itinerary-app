import React from 'react';
import '../Designs/BackgroundSlideshow.css'; // We’ll create this CSS file

export default function LayoutWrapper({ children }) {
  return (
    <div className="slideshow-wrapper">
      <div className="slideshow-overlay">
        {children}
      </div>
    </div>
  );
}
