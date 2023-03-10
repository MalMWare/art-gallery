import {useState, useEffect} from 'react'
import Gallery from './Gallery'
//import logo from './logo.svg';
//import './App.css';

function App() {
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})
  
  useEffect(() => {
      document.title='Welcome to Artworld'
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(resData => setData(resData))
  }, [artId])
  
  return (
    <div>
      <Gallery data={data} />
    </div>
  )
}

export default App;
