import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Imagecard from './components/Imagecard.jsx'
import Imagesearch from './components/Imagesearch.jsx'

function App() {
  const [images, setImages] = useState([])
  const [isLoding, setIsLoding] = useState(true)
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=42489429-36e73a857139348e951242c36&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoding(false)
      })
      .catch(err => console.log(err))
  }, [term]);

  return (
    <>
      <div className="container mx-auto">
        <Imagesearch searchText={(text) => setTerm(text)} />
        {!isLoding && images.length === 0 && <h1 className="text-6xl text-center mx-auto mt-32">No Images Found</h1>}
        {isLoding ? <h1 className="text-xl text-center mx-auto mt-32">Loding...</h1> : <div className="grid grid-cols-3 gap-4">
          {images.map(image => (
            <Imagecard key={image.id} image={image} />

          ))}
        </div>}
      </div>
    </>
  )
}

export default App