import React,{ useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';


function App() {

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [memesCorner, setMemesCorner] = useState([]);

  useEffect(() => {
    Axios.get('https://xmeme-serverr.herokuapp.com/memes').then((response) => {
      setMemesCorner(response.data);
    });
  }, []);

  // useEffect(() => {
  //   Axios.get('http://localhost:3001/memes/').then((response) => {
  //     setMemesCorner(response.data);
  //   });
  // }, [memesCorner]);

  const submitMeme = () => {
    Axios.post('https://xmeme-serverr.herokuapp.com/memes', {
      personName:name, 
      theUrl:url, 
      caption:caption,
    });
    
    setMemesCorner([
      ...memesCorner, 
      {
        name:name,
        url:url,
        caption:caption,
    }]);
  }

  const deleteMeme = (memeid) => {
    Axios.delete(`https://xmeme-serverr.herokuapp.com/delete/${memeid}`, {
      personName:name, 
      theUrl:url, 
      caption:caption,
    });
    setMemesCorner([
      ...memesCorner
    ]);
  }


  return (
    <div className="app">
      
      <div className="app__body">
        <h2>🐶 XMeme 🦥</h2>
        <div className="app__stream">
          <h3>Meme Stream</h3>
          <form>
            <h6>Meme Owner</h6>
            <input type='text' placeholder='Enter your full name' onChange={(e) => {
              setName(e.target.value)
            }} />
            <h6>Caption</h6>
            <input type='text' placeholder='Be creative with the caption' onChange={(e) => {
              setCaption(e.target.value)
            }} />
            <h6>Meme URL</h6>
            <input type='url' placeholder='Enter URL of your meme here' onChange={(e) => {
              setUrl(e.target.value)
            }} />

            <button onClick={submitMeme}>Submit Meme</button>
          </form>
        </div>

        <div className="app__memehub">
  
          {memesCorner.slice(0).reverse().map(({id,name,url,caption}) => {
            return(
              <div className='meme'>
                <div className="meme__action">
                  <h5>{name}</h5>
                  <button onClick={() => {deleteMeme(id)}}> <DeleteForeverRoundedIcon /> </button>
                </div>
                <p>{caption}</p>
                <img src={url} alt="meme"/>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}

export default App;
