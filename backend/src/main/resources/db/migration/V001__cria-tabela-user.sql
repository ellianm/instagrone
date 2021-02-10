create table user(
    id bigint not null auto_increment primary key,
    username varchar(20) not null,
    full_name varchar(255) not null,
    password varchar(255) not null,
    email varchar(255) not null,
    phone_number varchar(20),
    gender integer not null,
    site varchar(255),
    biography text,
    profile_picture text
)