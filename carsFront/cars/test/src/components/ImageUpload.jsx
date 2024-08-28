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
                <label class="file-label">
                    <input type="file" onChange={handleFileChange}/>
                    <span class="file-button">Escolher Arquivo</span>
                </label>
                <button type="submit">Coloque a Imagem</button>
            </form>
        </div>
    )
}

export default ImageUpload


