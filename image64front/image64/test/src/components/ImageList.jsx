import React, {useEffect, useState} from "react";
import axios from 'axios';

function ImageList() {
    const [image, setImage] = useState([]);

    useEffect(() => {
        axios.get('/api/test')
            .then(response => {
                console.log(response.data); 
                setImage(response.data);
            })
            .catch(error => {
                console.error("Deu pau na api kk", error);
            });
    }, []
);

return(
    <div>
        {image.map(img => (
            <div key={img.id}>
                <img src={`data:image/jpeg;base64,${img.image64}`} alt={`Image: ${img.id}`} />
            </div>
        ))}
    </div>
  )
}

export default ImageList;