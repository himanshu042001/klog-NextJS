// components/PlayerGallery.js
import React from 'react';

const PlayerGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <div className="relative">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src="https://w0.peakpx.com/wallpaper/408/356/HD-wallpaper-kl-rahul-kings-xi-kl-rahul-rahul.jpg"
          alt="Player Image 1"
        />
      </div>
      <div className="relative">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src="https://w0.peakpx.com/wallpaper/294/148/HD-wallpaper-kl-rahul-ind-vs-aus-india-kings-xi-punjab-kl-rahul.jpg"
          alt="Player Image 2"
        />
      </div>
      <div className="relative">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src="https://w0.peakpx.com/wallpaper/503/214/HD-wallpaper-kl-rahul-ind-vs-aus-india-kings-xi-punjab-kl-rahul-ruled-out.jpg"
          alt="Player Image 3"
        />
      </div>
      <div className="relative">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src="https://w0.peakpx.com/wallpaper/844/339/HD-wallpaper-kl-rahul-ipl-kings-xi-rahul.jpg"
        />
      </div>
      <div className="relative">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src="https://w0.peakpx.com/wallpaper/393/802/HD-wallpaper-kl-rahul-india-kl-rahul.jpg"
          alt="Player Image 5"
        />
      </div>
    </div>
  );
};

export default PlayerGallery;
