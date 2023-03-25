import React, { useEffect, useState } from 'react';
import Photo from '../Photo/Photo';
import './Photos.css'
const Photos = () => {
    const [Photos,setPhotos]=useState([]);

 useEffect(()=>{

fetch('https://jsonplaceholder.typicode.com/photos')
.then(res=>res.json())
.then(data=>setPhotos(data));


 },[])
    
        return (
        <div>
            <h1>how many photos:{Photos.length}</h1>
            <div className='style-photos'>
                {
                     Photos.map(photo=>
                        <Photo
                        
                        photo={photo}
                        >

                        </Photo>
                        )
                }

            </div>
        </div>
    );
};

export default Photos;