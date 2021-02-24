alter table stories_viewers add constraint fk_stories_viewers_user foreign key (user_id)
    references user(id);