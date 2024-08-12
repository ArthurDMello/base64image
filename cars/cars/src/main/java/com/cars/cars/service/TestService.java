package com.cars.cars.service;

import com.cars.cars.model.Test;
import com.cars.cars.repositories.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestService {

    @Autowired
    TestRepository testRepository;

    public List<Test> getAllTest(){
        return testRepository.findAll();
    }

    public Test getTestById(Long id){
        return testRepository.findById(id).orElse(null);
    }

    public Test saveTest(Test test){
        return testRepository.save(test);
    }
}
