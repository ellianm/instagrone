package br.com.instagrone.Instagrone.api.controller;

import br.com.instagrone.Instagrone.domain.model.Stories;
import br.com.instagrone.Instagrone.domain.model.StoriesViewers;
import br.com.instagrone.Instagrone.domain.repository.StoriesRepository;
import br.com.instagrone.Instagrone.domain.repository.StoriesViewersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/stories/{storiesId}/viewers")
public class StoriesViewersController {

    @Autowired
    private StoriesRepository storiesRepository;

    @GetMapping
    public List<StoriesViewers> list(@PathVariable Long storiesId){
        return storiesRepository.findById(storiesId).get().getViewers();
    }
//
//    @GetMapping("/{viewerId}")
//    public ResponseEntity<StoriesViewers> findById(@PathVariable Long storiesId, @PathVariable Long viewerId){
//        Optional<StoriesViewers> stories = storiesRepository.findById(storiesId).get().getViewers().;
//
//        return stories.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
//    }
}
