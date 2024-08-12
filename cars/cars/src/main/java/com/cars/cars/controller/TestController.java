package com.cars.cars.controller;

import com.cars.cars.model.Test;
import com.cars.cars.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/test")
public class TestController {

    @Autowired
    private TestService testService;

    @GetMapping
    public List<Test> getAllTest(){
        return testService.getAllTest();
    }

    @GetMapping("/{id}")
    public Test getCarById(@PathVariable Long id){
        return testService.getTestById(id);
    }

    @PostMapping
    public Test saveCar(@RequestBody Test test){
        return testService.saveTest(test);
    }
}
