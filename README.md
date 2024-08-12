# test


Criando o Frontend com React
Agora, vamos criar um componente React que consome essa API e exibe as imagens.

CarList.js
javascript
Copiar código
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CarList() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('/api/cars')
            .then(response => {
                setCars(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the cars!", error);
            });
    }, []);

    return (
        <div>
            {cars.map(car => (
                <div key={car.id}>
                    <img src={`data:image/jpeg;base64,${car.imageBase64}`} alt={`Car ${car.id}`} />
                </div>
            ))}
        </div>
    );
}

export default CarList;



Para criar uma classe em Spring Boot que tenha um campo id e uma imagem salva em formato Base64, e depois consumir esse backend usando React, aqui está um exemplo de como você pode fazer isso.

1. Criando a Classe no Spring Boot
Primeiro, vamos criar uma classe Car que terá um campo id e um campo para a imagem em Base64.

Car.java
java
Copiar código
package com.example.cardealership.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String imageBase64;

    // Getters e Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImageBase64() {
        return imageBase64;
    }

    public void setImageBase64(String imageBase64) {
        this.imageBase64 = imageBase64;
    }
}
2. Criando o Repositório
Agora, crie um repositório para a classe Car.

CarRepository.java
java
Copiar código
package com.example.cardealership.repository;

import com.example.cardealership.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, Long> {
}
3. Criando o Serviço
Vamos criar um serviço para lidar com a lógica de negócios relacionada à classe Car.

CarService.java
java
Copiar código
package com.example.cardealership.service;

import com.example.cardealership.model.Car;
import com.example.cardealership.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {

    @Autowired
    private CarRepository carRepository;

    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    public Car getCarById(Long id) {
        return carRepository.findById(id).orElse(null);
    }

    public Car saveCar(Car car) {
        return carRepository.save(car);
    }
}
4. Criando o Controlador
Crie um controlador para expor as APIs REST.

CarController.java
java
Copiar código
package com.example.cardealership.controller;

import com.example.cardealership.model.Car;
import com.example.cardealership.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cars")
public class CarController {

    @Autowired
    private CarService carService;

    @GetMapping
    public List<Car> getAllCars() {
        return carService.getAllCars();
    }

    @GetMapping("/{id}")
    public Car getCarById(@PathVariable Long id) {
        return carService.getCarById(id);
    }

    @PostMapping
    public Car saveCar(@RequestBody Car car) {
        return carService.saveCar(car);
    }
}
5. Criando o Frontend com React
Agora, vamos criar um componente React que consome essa API e exibe as imagens.

CarList.js
javascript
Copiar código
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CarList() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('/api/cars')
            .then(response => {
                setCars(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the cars!", error);
            });
    }, []);

    return (
        <div>
            {cars.map(car => (
                <div key={car.id}>
                    <img src={`data:image/jpeg;base64,${car.imageBase64}`} alt={`Car ${car.id}`} />
                </div>
            ))}
        </div>
    );
}

export default CarList;
6. Fazendo o Upload de Imagens
Se você quiser permitir o upload de imagens no React e enviar para o backend, pode adicionar um formulário para o upload.

CarUpload.js
javascript
Copiar código
import React, { useState } from 'react';
import axios from 'axios';

function CarUpload() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
            axios.post('/api/cars', { imageBase64: base64String })
                .then(response => {
                    console.log("Car saved successfully", response.data);
                })
                .catch(error => {
                    console.error("There was an error uploading the image!", error);
                });
        };
        reader.readAsDataURL(file);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Upload Image</button>
        </form>
    );
}

export default CarUpload;






7. Configurando a Aplicação
Certifique-se de que a sua aplicação React esteja configurada para fazer requisições à API do Spring Boot. Você pode configurar o proxy no package.json para redirecionar as requisições para o backend durante o desenvolvimento:

package.json
json
Copiar código
{
  "name": "car-dealership-app",
  "version": "0.1.0",
  "proxy": "http://localhost:8080",
  ...
}
8. Executando a Aplicação
Inicie o Spring Boot no backend.
Inicie o servidor React no frontend.
Abra o navegador e você verá a lista de carros com as imagens exibidas.
Essa estrutura permite salvar imagens em Base64 no backend, enviá-las através de uma API REST e exibi-las no frontend React.







