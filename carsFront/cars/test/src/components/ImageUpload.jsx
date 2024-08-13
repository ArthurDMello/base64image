import React, {useState} from "react";
import axios from "axios";

function ImageUpload() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
            axios.post('/api/test', {image64: base64String })
                .then(response => {
                    console.log("Deu bom", response.data);

                })
                .catch(error => {
                    console.error("Deu ruim", error);
                })
        }
        reader.readAsDataURL(file);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange}/>
                <button type="submit">Coloque a Imagem</button>
            </form>
        </div>
        )
}

export default ImageUpload


