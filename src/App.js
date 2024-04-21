import './App.css';
import { useState } from 'react';
import SeachBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';
function App() {
    const [images,setImages]=useState([]);
    const handleSubmit = async (term) =>{
        console.log("searching for ",term);
        const result = await searchImages(term);
        setImages(result);
    };

    return (
        <div>
            <SeachBar onSubmit={handleSubmit}/> 
            {/*The searchbar component is called and the handleSubmit function will be called with whatever value that will be returned from the searchbar.. we are passing the onSubmit as props.. so the value will be assigned to onSubmit */}
            <ImageList images = {images}/>
        </div>
    );
}
export default App;