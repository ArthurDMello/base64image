import ImageList from './components/ImageList'
import ImageUpload from './components/ImageUpload'
import './App.css'

function App() {

  return (
    <>
       <div className='container'>
          <ImageUpload/>
          <ImageList/>
        </div> 
    </>
  )
}

export default App
