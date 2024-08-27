package org.example.image64.controller;

import org.example.image64.model.Image64;
import org.example.image64.service.Image64Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/test")
public class Image64Controller {

    @Autowired
    private Image64Service image64Service;

    @GetMapping
    public List<Image64> getAllImage64() {
        return image64Service.getAllImages64();
    }

    @GetMapping("{id}")
    public Image64 getImage64(@PathVariable Long id) {
        return image64Service.getImage64(id);
    }

    @PostMapping
    public Image64 saveImage64(@RequestBody Image64 image64) {
        return image64Service.saveImage64(image64);
    }
}
