create table Authenticator
(
    credentialID         varchar(191) not null,
    userId               varchar(191) not null,
    providerAccountId    varchar(191) not null,
    credentialPublicKey  varchar(191) not null,
    counter              int          not null,
    credentialDeviceType varchar(191) not null,
    credentialBackedUp   tinyint(1)   not null,
    transports           varchar(191) null,
    primary key (userId, credentialID),
    constraint Authenticator_credentialID_key
        unique (credentialID),
    constraint Authenticator_userId_fkey
        foreign key (userId) references User (id)
            on update cascade on delete cascade
)
    collate = utf8mb4_unicode_ci;

