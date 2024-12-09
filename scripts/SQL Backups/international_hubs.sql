-- International Airlines Hub Insertions
-- Created: 2024-12-09

INSERT INTO restools.Hub (airline, iata, airport, city, createdAt, updatedAt) VALUES
-- Air Canada Hubs
('Air Canada', 'YYZ', 'Toronto Pearson International Airport', 'Toronto', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
('Air Canada', 'YVR', 'Vancouver International Airport', 'Vancouver', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
('Air Canada', 'YUL', 'Montréal-Pierre Elliott Trudeau International Airport', 'Montreal', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
('Air Canada', 'YYC', 'Calgary International Airport', 'Calgary', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),

-- Lufthansa Hubs
('Lufthansa', 'FRA', 'Frankfurt Airport', 'Frankfurt', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
('Lufthansa', 'MUC', 'Munich Airport', 'Munich', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
('Lufthansa', 'DUS', 'Düsseldorf Airport', 'Düsseldorf', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),

-- Air China Hubs
('Air China', 'PEK', 'Beijing Capital International Airport', 'Beijing', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
('Air China', 'CTU', 'Chengdu Shuangliu International Airport', 'Chengdu', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
('Air China', 'SHA', 'Shanghai Hongqiao International Airport', 'Shanghai', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),

-- Emirates Hubs
('Emirates', 'DXB', 'Dubai International Airport', 'Dubai', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),

-- British Airways Hubs
('British Airways', 'LHR', 'London Heathrow Airport', 'London', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
('British Airways', 'LGW', 'London Gatwick Airport', 'London', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),

-- Air France Hubs
('Air France', 'CDG', 'Charles de Gaulle Airport', 'Paris', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
('Air France', 'ORY', 'Paris Orly Airport', 'Paris', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),

-- KLM Royal Dutch Airlines Hubs
('KLM', 'AMS', 'Amsterdam Airport Schiphol', 'Amsterdam', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),

-- Singapore Airlines Hubs
('Singapore Airlines', 'SIN', 'Singapore Changi Airport', 'Singapore', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),

-- Qantas Hubs
('Qantas', 'SYD', 'Sydney Kingsford Smith Airport', 'Sydney', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
('Qantas', 'MEL', 'Melbourne Airport', 'Melbourne', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),

-- Japan Airlines Hubs
('Japan Airlines', 'HND', 'Tokyo Haneda Airport', 'Tokyo', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
('Japan Airlines', 'NRT', 'Narita International Airport', 'Tokyo', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),

-- Korean Air Hubs
('Korean Air', 'ICN', 'Incheon International Airport', 'Seoul', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),
('Korean Air', 'GMP', 'Gimpo International Airport', 'Seoul', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));
