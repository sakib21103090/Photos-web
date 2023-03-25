import React from 'react';
import './Photo.css'

const Photo = (props) => {
    console.log(props.photo)
    const {albumId,thumbnailUrl,url,title}=props.photo;
    return (
        <div>
           <div className='photo'> 
             <h2>albumId:{albumId}</h2>
             <h3>thumbnailUrl:{thumbnailUrl}</h3>
             <h4>url:{url}</h4>
             <h5>title:{title}</h5>
           </div>
        </div>
    );
};

export default Photo;