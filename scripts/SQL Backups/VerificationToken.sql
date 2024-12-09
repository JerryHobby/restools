create table VerificationToken
(
    identifier varchar(191) not null,
    token      varchar(191) not null,
    expires    datetime(3)  not null,
    constraint VerificationToken_identifier_token_key
        unique (identifier, token)
)
    collate = utf8mb4_unicode_ci;

