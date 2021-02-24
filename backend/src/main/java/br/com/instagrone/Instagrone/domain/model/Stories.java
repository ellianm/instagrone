package br.com.instagrone.Instagrone.domain.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.time.OffsetDateTime;
import java.util.List;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity(name = "stories")
public class Stories {

    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User userId;

    private String sourceUrl;

    private OffsetDateTime publicationDate;

    @OneToMany(mappedBy = "storiesId")
    private List<StoriesViewers> viewers;
}
