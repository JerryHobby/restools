create table Session
(
    id           varchar(191)                             not null
        primary key,
    sessionToken varchar(191)                             not null,
    userId       varchar(191)                             not null,
    expires      datetime(3)                              not null,
    createdAt    datetime(3) default current_timestamp(3) not null,
    updatedAt    datetime(3)                              not null,
    constraint Session_sessionToken_key
        unique (sessionToken),
    constraint Session_userId_fkey
        foreign key (userId) references User (id)
            on update cascade
)
    collate = utf8mb4_unicode_ci;

create index Session_userId_idx
    on Session (userId);

