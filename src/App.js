import {useState, useEffect} from 'react'
import ButtonBar from './ButtonBar'
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

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }
  
  return (
    <div>
      <Gallery data={data} />
      <ButtonBar setArtId={handleIterate}/>
    </div>
  )
}

export default App;
