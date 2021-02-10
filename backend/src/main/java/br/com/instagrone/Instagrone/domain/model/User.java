package br.com.instagrone.Instagrone.domain.model;

import br.com.instagrone.Instagrone.core.enuns.Gender;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Long id;

    private String username;

    private String password;

    private String fullName;

    private String email;

    private String phoneNumber;

    private Gender gender;

    private String site;

    private String biography;

    private String profilePicture;
}
