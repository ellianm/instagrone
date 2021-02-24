create table stories (
	id bigint not null auto_increment primary key,
	source_url blob not null,
	publication_date timestamp not null,
	user_id bigint not null
)