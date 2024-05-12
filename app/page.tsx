// pages/kl-rahul-blog.js
import React from 'react';
import PlayerGallery from '../components/PlayerGallery';
import About from '../components/About';
import Records from '../components/Records';
import Stats from '../components/Stats';

const KLRAhulBlog = () => {
  return (
    <div>
    
      <h1 className="text-4xl font-bold mt-8 mb-6 text-gray-500">KL Rahul's Blog</h1>
      <PlayerGallery/>
      <About/>
      <Records/>
      <br/><br/>
      <h1 className="text-4xl font-bold mt-8 mb-6 text-gray-500 ml-500">KL Rahul's Stats</h1>
      <br/><br/>
      <Stats/>

 
    </div>
  );
};

export default KLRAhulBlog;
