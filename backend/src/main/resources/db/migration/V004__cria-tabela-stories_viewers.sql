create table stories_viewers(
    id bigint not null auto_increment primary key,
    stories_id bigint not null,
    user_id bigint not null,
    view_date timestamp not null
)