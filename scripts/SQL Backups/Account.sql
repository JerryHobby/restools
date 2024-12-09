create table Account
(
    id                       varchar(191)                             not null
        primary key,
    userId                   varchar(191)                             not null,
    type                     varchar(191)                             not null,
    provider                 varchar(191)                             not null,
    providerAccountId        varchar(191)                             not null,
    refresh_token            text                                     null,
    access_token             text                                     null,
    expires_at               int                                      null,
    token_type               varchar(191)                             null,
    scope                    varchar(191)                             null,
    id_token                 text                                     null,
    session_state            varchar(191)                             null,
    refresh_token_expires_in int                                      null,
    createdAt                datetime(3) default current_timestamp(3) not null,
    updatedAt                datetime(3)                              not null,
    constraint Account_provider_providerAccountId_key
        unique (provider, providerAccountId),
    constraint Account_userId_key
        unique (userId),
    constraint Account_userId_fkey
        foreign key (userId) references User (id)
            on update cascade
)
    collate = utf8mb4_unicode_ci;

create index Account_userId_idx
    on Account (userId);

