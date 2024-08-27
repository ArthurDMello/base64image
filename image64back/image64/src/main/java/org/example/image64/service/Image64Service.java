package org.example.image64.service;

import org.example.image64.model.Image64;
import org.example.image64.repository.Image64Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Image64Service {

    @Autowired
    Image64Repository image64Repository;

    public List<Image64> getAllImages64() {
        return image64Repository.findAll();
    }

    public Image64 getImage64(Long id) {
        return image64Repository.findById(id).orElse(null);
    }

    public Image64 saveImage64(Image64 image64) {
        return image64Repository.save(image64);
    }


}
