alter table stories add constraint fk_stories_user foreign key (user_id)
    references user(id);

