create table User
(
    id            varchar(191)                             not null
        primary key,
    name          varchar(191)                             null,
    username      varchar(191)                             null,
    email         varchar(191)                             null,
    emailVerified datetime(3)                              null,
    image         varchar(191)                             null,
    createdAt     datetime(3) default current_timestamp(3) not null,
    updatedAt     datetime(3)                              not null,
    constraint User_email_key
        unique (email),
    constraint User_username_key
        unique (username)
)
    collate = utf8mb4_unicode_ci;

