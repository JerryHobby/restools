create table _prisma_migrations
(
    id                  varchar(36)                               not null
        primary key,
    checksum            varchar(64)                               not null,
    finished_at         datetime(3)                               null,
    migration_name      varchar(255)                              not null,
    logs                text                                      null,
    rolled_back_at      datetime(3)                               null,
    started_at          datetime(3)  default current_timestamp(3) not null,
    applied_steps_count int unsigned default 0                    not null
)
    collate = utf8mb4_unicode_ci;

INSERT INTO restools._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('28d4bfcf-bd21-4fc3-a738-a6f83fece961', '519011482eabc898e4c9ccc9608da9829f5407160163f5e8197dd2070a02b1b1', '2024-12-09 03:06:06.324', '20241206220225_drop_user_table_sample', null, null, '2024-12-09 03:06:06.248', 1);
INSERT INTO restools._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('2955fd24-bd17-48de-b5bc-7679134b444b', '122d743a0403e77ad7e0ed9447f5b8826f2fbdbc55612d936eff004dd13c2eec', '2024-12-09 03:12:53.402', '20241209031235_add_hubs_table_preserve_data', null, null, '2024-12-09 03:12:53.295', 1);
INSERT INTO restools._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('5425b05c-1159-4ef8-a739-bf0369c4881d', '8d0b3d80308f9d08d6454eac9352fc7f7ea1fd5cd6414d61199c0e1ca3c98572', '2024-12-09 03:06:06.821', '20241206234729_add_aviation_tables', null, null, '2024-12-09 03:06:06.627', 1);
INSERT INTO restools._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('84e3e1de-8524-42f7-ba4c-4a3b635b96c5', '47935fb4b8fa08785f02cdd65de0dc25de6df6fead4a8ece47a3444f30547e08', '2024-12-09 03:06:07.387', '20241209025054_add_hubs_table', null, null, '2024-12-09 03:06:07.313', 1);
INSERT INTO restools._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('a8e3d139-53e7-42da-9c4f-8583d7af8162', 'f8c38b7e1064ac1ef2e124439d9dcfbc9f5096b068d9f6ed7d07ebe8234cf813', '2024-12-09 03:06:07.028', '20241208231856_rename_table', null, null, '2024-12-09 03:06:06.842', 1);
INSERT INTO restools._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('aafec1eb-db0f-485a-93ab-69a13b5f9104', '37c8702aaee3cb964ab3e55da1b4a8564980b5ee1069b0c741a91b535008694a', '2024-12-09 03:06:06.604', '20241206220354_create_auth_tables', null, null, '2024-12-09 03:06:06.342', 1);
INSERT INTO restools._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('b8e4bdff-e2b8-4b4b-a36e-c1ab8d4b7e3e', '715fcb1cca5eb4df315debf9eafcc55f78fdaea4a7452385cada54b5cfae488b', '2024-12-09 03:06:06.206', '20241206212000_init', null, null, '2024-12-09 03:06:06.087', 1);
INSERT INTO restools._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('ead95dae-a5ae-46a2-b618-a73ea4565eda', 'ce21838780d200d7f80bbbecfacb0c983b8c9b9134b1da540063ad41646dc6a3', '2024-12-09 03:06:07.288', '20241208232254_rename_tables', null, null, '2024-12-09 03:06:07.053', 1);
