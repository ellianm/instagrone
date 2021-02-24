alter table stories_viewers add constraint fk_stories_viewers_stories foreign key (stories_id)
    references stories(id);