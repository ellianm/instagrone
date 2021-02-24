package br.com.instagrone.Instagrone.domain.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.time.OffsetDateTime;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity(name = "stories_viewers")
public class StoriesViewers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Long id;

    @ManyToOne
    private Stories storiesId;

    @ManyToOne
    private User userId;

    private OffsetDateTime viewDate;
}
