import React from 'react';
import './App.css';
import Meme from './Meme';

function App() {
  return (
    <div className="app">
      
      <div className="app__body">
        <h2>🐶 XMeme 🦥</h2>
        <div className="app__stream">
          <h3>Meme Stream</h3>
          <form>
            <h6>Meme Owner</h6>
            <input type='text' placeholder='Enter your full name' />
            <h6>Caption</h6>
            <input type='text' placeholder='Be creative with the caption' />
            <h6>Meme URL</h6>
            <input type='url' placeholder='Enter URL of your meme here' />

            <button >Submit Meme</button>
          </form>
        </div>

        <div className="app__memehub">
          <Meme name='Manoj kr' caption='How u doing? I am fine how u doing. Lets grab a coffe sometime if u donot mind. Sure Why not, See you then!How u doing? I am fine how u doing. Lets grab a coffe sometime if u donot mind. Sure Why not, See you then!' url='https://www.marketingmind.in/wp-content/uploads/2019/03/Meme-Marketin-700x366.jpg' />
          <Meme name='Bhuvan Bham' caption='How u doing?' url='https://www.rvcj.com/wp-content/uploads/2019/03/Capture-43.png' />
          <Meme name='Harsh Beniwal' caption='How u doing?' url='https://www.iqmetrix.com/hubfs/Meme%2021.jpg' />
          <Meme name='Ashish Chanchalani' caption='How u doing?' url='https://media.newyorker.com/photos/59097a981c7a8e33fb390030/16:9/w_1280,c_limit/Hsu-Jill-Memes.jpg' />
          <Meme name='Drake D' caption='How u doing?' url='https://3c534w2w7sa3ma8ved14ax12-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/Copy-of-Untitled-2020-07-08T105340.290-1080x630.png' />
        </div>

      </div>

    </div>
  );
}

export default App;
