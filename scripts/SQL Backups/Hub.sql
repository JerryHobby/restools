create table Hub
(
    id        int auto_increment
        primary key,
    airline   varchar(191)                             not null,
    iata      varchar(191)                             not null,
    airport   varchar(191)                             not null,
    city      varchar(191)                             not null,
    createdAt datetime(3) default current_timestamp(3) not null,
    updatedAt datetime(3)                              not null
)
    collate = utf8mb4_unicode_ci;

create index Hub_airline_idx
    on Hub (airline);

create index Hub_iata_idx
    on Hub (iata);

INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (1, 'United Airlines', 'DEN', 'Denver International Airport', 'Denver', '2024-12-09 03:06:14.857', '2024-12-09 03:06:14.857');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (2, 'United Airlines', 'IAH', 'George Bush Intercontinental Airport', 'Houston', '2024-12-09 03:06:15.007', '2024-12-09 03:06:15.007');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (3, 'United Airlines', 'LAX', 'Los Angeles International Airport', 'Los Angeles', '2024-12-09 03:06:15.091', '2024-12-09 03:06:15.091');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (4, 'United Airlines', 'EWR', 'Newark Liberty International Airport', 'Newark', '2024-12-09 03:06:15.186', '2024-12-09 03:06:15.186');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (5, 'United Airlines', 'ORD', 'O’Hare International Airport', 'Chicago', '2024-12-09 03:06:15.272', '2024-12-09 03:06:15.272');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (6, 'United Airlines', 'SFO', 'San Francisco International Airport', 'San Francisco', '2024-12-09 03:06:15.353', '2024-12-09 03:06:15.353');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (7, 'United Airlines', 'IAD', 'Washington Dulles International Airport', 'Washington', '2024-12-09 03:06:15.438', '2024-12-09 03:06:15.438');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (8, 'United Airlines', 'GUM', 'Antonio B. Won Pat International Airport', 'Guam', '2024-12-09 03:06:15.511', '2024-12-09 03:06:15.511');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (9, 'United Airlines', 'NRT', 'Narita International Airport', 'Tokyo', '2024-12-09 03:06:15.584', '2024-12-09 03:06:15.584');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (10, 'American Airlines', 'CLT', 'Charlotte Douglas International Airport', 'Charlotte', '2024-12-09 03:06:15.658', '2024-12-09 03:06:15.658');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (11, 'American Airlines', 'ORD', 'O’Hare International Airport', 'Chicago', '2024-12-09 03:06:15.735', '2024-12-09 03:06:15.735');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (12, 'American Airlines', 'DFW', 'Dallas/Fort Worth International Airport', 'Dallas', '2024-12-09 03:06:15.812', '2024-12-09 03:06:15.812');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (13, 'American Airlines', 'LAX', 'Los Angeles International Airport', 'Los Angeles', '2024-12-09 03:06:15.909', '2024-12-09 03:06:15.909');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (14, 'American Airlines', 'MIA', 'Miami International Airport', 'Miami', '2024-12-09 03:06:15.983', '2024-12-09 03:06:15.983');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (15, 'American Airlines', 'JFK', 'John F. Kennedy International Airport', 'New York', '2024-12-09 03:06:16.055', '2024-12-09 03:06:16.055');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (16, 'American Airlines', 'LGA', 'LaGuardia Airport', 'New York', '2024-12-09 03:06:16.130', '2024-12-09 03:06:16.130');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (17, 'American Airlines', 'PHL', 'Philadelphia International Airport', 'Philadelphia', '2024-12-09 03:06:16.212', '2024-12-09 03:06:16.212');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (18, 'American Airlines', 'PHX', 'Phoenix Sky Harbor International Airport', 'Phoenix', '2024-12-09 03:06:16.287', '2024-12-09 03:06:16.287');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (19, 'American Airlines', 'DCA', 'Ronald Reagan Washington National Airport', 'Washington', '2024-12-09 03:06:16.370', '2024-12-09 03:06:16.370');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (20, 'Delta', 'CVG', 'Cincinnati/Northern Kentucky International Airport', 'Cincinnati', '2024-12-09 03:06:16.445', '2024-12-09 03:06:16.445');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (21, 'Delta', 'DTW', 'Detroit Metropolitan Airport', 'Detroit', '2024-12-09 03:06:16.514', '2024-12-09 03:06:16.514');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (22, 'Delta', 'ATL', 'Hartsfield-Jackson Atlanta International Airport', 'Atlanta', '2024-12-09 03:06:16.590', '2024-12-09 03:06:16.590');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (23, 'Delta', 'JFK', 'John F. Kennedy International Airport', 'New York City', '2024-12-09 03:06:16.669', '2024-12-09 03:06:16.669');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (24, 'Delta', 'LGA', 'LaGuardia Airport', 'New York City', '2024-12-09 03:06:16.754', '2024-12-09 03:06:16.754');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (25, 'Delta', 'BOS', 'Logan International Airport', 'Boston', '2024-12-09 03:06:16.829', '2024-12-09 03:06:16.829');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (26, 'Delta', 'LAX', 'Los Angeles International Airport', 'Los Angeles', '2024-12-09 03:06:16.898', '2024-12-09 03:06:16.898');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (27, 'Delta', 'MSP', 'Minneapolis-St. Paul International Airport', 'Minneapolis', '2024-12-09 03:06:16.970', '2024-12-09 03:06:16.970');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (28, 'Delta', 'SLC', 'Salt Lake City International Airport', 'Salt Lake City', '2024-12-09 03:06:17.047', '2024-12-09 03:06:17.047');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (29, 'Delta', 'SEA', 'Seattle-Tacoma International Airport', 'Seattle', '2024-12-09 03:06:17.132', '2024-12-09 03:06:17.132');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (30, 'Southwest', 'DAL', 'Dallas Love Field', 'Dallas', '2024-12-09 03:06:17.209', '2024-12-09 03:06:17.209');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (31, 'Southwest', 'MDW', 'Chicago Midway International Airport', 'Chicago', '2024-12-09 03:06:17.283', '2024-12-09 03:06:17.283');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (32, 'Southwest', 'HOU', 'William P. Hobby Airport', 'Houston', '2024-12-09 03:06:17.356', '2024-12-09 03:06:17.356');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (33, 'Southwest', 'BWI', 'Baltimore Washington International Airport', 'Baltimore', '2024-12-09 03:06:17.430', '2024-12-09 03:06:17.430');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (34, 'Southwest', 'ATL', 'Hartsfield-Jackson Atlanta International Airport', 'Atlanta', '2024-12-09 03:06:17.505', '2024-12-09 03:06:17.505');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (35, 'Southwest', 'DEN', 'Denver International Airport', 'Denver', '2024-12-09 03:06:17.588', '2024-12-09 03:06:17.588');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (36, 'Southwest', 'LAS', 'McCarran International Airport', 'Las Vegas', '2024-12-09 03:06:17.664', '2024-12-09 03:06:17.664');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (37, 'Southwest', 'OAK', 'Metropolitan Oakland International Airport', 'Oakland', '2024-12-09 03:06:17.745', '2024-12-09 03:06:17.745');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (38, 'Southwest', 'MCO', 'Orlando International Airport', 'Orlando', '2024-12-09 03:06:17.823', '2024-12-09 03:06:17.823');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (39, 'Southwest', 'PHX', 'Phoenix Sky Harbor International Airport', 'Phoenix', '2024-12-09 03:06:17.921', '2024-12-09 03:06:17.921');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (40, 'Jet Blue', 'JFK', 'John F. Kennedy International Airport', 'New York City', '2024-12-09 03:06:18.007', '2024-12-09 03:06:18.007');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (41, 'Jet Blue', 'FLL', 'Hollywood International Airport', 'Fort Lauderdale', '2024-12-09 03:06:18.077', '2024-12-09 03:06:18.077');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (42, 'Jet Blue', 'BOS', 'Logan International Airport', 'Boston', '2024-12-09 03:06:18.162', '2024-12-09 03:06:18.162');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (43, 'Jet Blue', 'LGB', 'Long Beach Airport', 'Long Beach', '2024-12-09 03:06:18.232', '2024-12-09 03:06:18.232');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (44, 'Jet Blue', 'SJU', 'Luis Muñoz Marin International Airport', 'San Juan', '2024-12-09 03:06:18.317', '2024-12-09 03:06:18.317');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (45, 'Jet Blue', 'MCO', 'Orlando International Airport', 'Orlando', '2024-12-09 03:06:18.392', '2024-12-09 03:06:18.392');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (46, 'Alaska Airlines', 'LAX', 'Los Angeles International Airport', 'Los Angeles', '2024-12-09 03:06:18.463', '2024-12-09 03:06:18.463');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (47, 'Alaska Airlines', 'PH', 'Portsmouth-South Coast Regional Airport', 'Portsmouth', '2024-12-09 03:06:18.538', '2024-12-09 03:06:18.538');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (48, 'Alaska Airlines', 'SEA', 'Seattle-Tacoma International Airport', 'Seattle', '2024-12-09 03:06:18.615', '2024-12-09 03:06:18.615');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (49, 'Alaska Airlines', 'ANC', 'Ted Stevens Anchorage International Airport', 'Anchorage', '2024-12-09 03:06:18.688', '2024-12-09 03:06:18.688');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (50, 'Alaska Airlines', 'SAN', 'San Diego International Airport', 'San Diego', '2024-12-09 03:06:18.795', '2024-12-09 03:06:18.795');
INSERT INTO restools.Hub (id, airline, iata, airport, city, createdAt, updatedAt) VALUES (51, 'Alaska Airlines', 'SJC', 'Norman Y Mineta San Jose International Airport', 'San Jose', '2024-12-09 03:06:18.890', '2024-12-09 03:06:18.890');
