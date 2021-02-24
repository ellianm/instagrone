package br.com.instagrone.Instagrone.api.controller;

import br.com.instagrone.Instagrone.domain.model.Stories;
import br.com.instagrone.Instagrone.domain.model.User;
import br.com.instagrone.Instagrone.domain.repository.StoriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/stories")
public class StoriesController {

    @Autowired
    private StoriesRepository storiesRepository;

    @GetMapping
    public List<Stories> list(){
        return storiesRepository.findAll();
    }

    @GetMapping("/{storiesId}")
    public ResponseEntity<Stories> findById(@PathVariable Long storiesId){
        Optional<Stories> stories = storiesRepository.findById(storiesId);

        return stories.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
