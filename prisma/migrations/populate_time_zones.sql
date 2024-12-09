-- Populate Time_Zone table with IANA timezone identifiers
-- North America
INSERT INTO Time_Zone (iata, time_zone, createdAt, updatedAt) VALUES
('ATL', 'America/New_York', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),     -- Atlanta
('BOS', 'America/New_York', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),     -- Boston
('CLT', 'America/New_York', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),     -- Charlotte
('DCA', 'America/New_York', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),     -- Washington DC
('DFW', 'America/Chicago', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),      -- Dallas
('DTW', 'America/Detroit', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),      -- Detroit
('EWR', 'America/New_York', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),     -- Newark
('IAD', 'America/New_York', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),     -- Washington Dulles
('IAH', 'America/Chicago', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),      -- Houston
('JFK', 'America/New_York', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),     -- New York
('LAX', 'America/Los_Angeles', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),  -- Los Angeles
('LGA', 'America/New_York', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),     -- New York LaGuardia
('MCO', 'America/New_York', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),     -- Orlando
('MDW', 'America/Chicago', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),      -- Chicago Midway
('MIA', 'America/New_York', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),     -- Miami
('MSP', 'America/Chicago', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),      -- Minneapolis
('ORD', 'America/Chicago', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),      -- Chicago O'Hare
('PDX', 'America/Los_Angeles', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),  -- Portland
('PHL', 'America/New_York', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),     -- Philadelphia
('PHX', 'America/Phoenix', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),      -- Phoenix
('SEA', 'America/Los_Angeles', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),  -- Seattle
('SFO', 'America/Los_Angeles', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),  -- San Francisco
('SLC', 'America/Denver', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),       -- Salt Lake City
('YUL', 'America/Montreal', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),     -- Montreal
('YVR', 'America/Vancouver', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),    -- Vancouver
('YYC', 'America/Edmonton', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),     -- Calgary
('YYZ', 'America/Toronto', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),      -- Toronto

-- Europe
('AMS', 'Europe/Amsterdam', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),     -- Amsterdam
('BCN', 'Europe/Madrid', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),        -- Barcelona
('CDG', 'Europe/Paris', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),         -- Paris Charles de Gaulle
('DUB', 'Europe/Dublin', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),        -- Dublin
('FCO', 'Europe/Rome', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),          -- Rome
('FRA', 'Europe/Berlin', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),        -- Frankfurt
('LGW', 'Europe/London', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),        -- London Gatwick
('LHR', 'Europe/London', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),        -- London Heathrow
('MAD', 'Europe/Madrid', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),        -- Madrid
('MUC', 'Europe/Berlin', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),        -- Munich
('ORY', 'Europe/Paris', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),         -- Paris Orly
('ZRH', 'Europe/Zurich', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),        -- Zurich

-- Asia
('BKK', 'Asia/Bangkok', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),         -- Bangkok
('CAN', 'Asia/Shanghai', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),        -- Guangzhou
('CGK', 'Asia/Jakarta', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),         -- Jakarta
('DEL', 'Asia/Kolkata', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),        -- Delhi
('DXB', 'Asia/Dubai', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),          -- Dubai
('HKG', 'Asia/Hong_Kong', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),      -- Hong Kong
('HND', 'Asia/Tokyo', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),          -- Tokyo Haneda
('ICN', 'Asia/Seoul', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),          -- Seoul Incheon
('KUL', 'Asia/Kuala_Lumpur', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),   -- Kuala Lumpur
('NRT', 'Asia/Tokyo', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),          -- Tokyo Narita
('PEK', 'Asia/Shanghai', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),       -- Beijing
('PVG', 'Asia/Shanghai', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),       -- Shanghai Pudong
('SIN', 'Asia/Singapore', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),      -- Singapore

-- Australia/Pacific
('AKL', 'Pacific/Auckland', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),    -- Auckland
('BNE', 'Australia/Brisbane', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),  -- Brisbane
('MEL', 'Australia/Melbourne', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)), -- Melbourne
('PER', 'Australia/Perth', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),     -- Perth
('SYD', 'Australia/Sydney', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),    -- Sydney

-- South America
('BOG', 'America/Bogota', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),      -- Bogota
('EZE', 'America/Argentina/Buenos_Aires', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)), -- Buenos Aires
('GIG', 'America/Sao_Paulo', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),   -- Rio de Janeiro
('GRU', 'America/Sao_Paulo', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),   -- São Paulo
('LIM', 'America/Lima', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),        -- Lima
('SCL', 'America/Santiago', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),    -- Santiago

-- Middle East
('AUH', 'Asia/Dubai', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),          -- Abu Dhabi
('DOH', 'Asia/Qatar', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),          -- Doha
('IST', 'Europe/Istanbul', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),     -- Istanbul
('JED', 'Asia/Riyadh', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),        -- Jeddah
('TLV', 'Asia/Jerusalem', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),      -- Tel Aviv

-- Africa
('CAI', 'Africa/Cairo', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)),        -- Cairo
('CPT', 'Africa/Johannesburg', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)), -- Cape Town
('JNB', 'Africa/Johannesburg', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)), -- Johannesburg
('NBO', 'Africa/Nairobi', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3))      -- Nairobi

-- Handle duplicates by updating if they exist
ON DUPLICATE KEY UPDATE
    time_zone = VALUES(time_zone),
    updatedAt = CURRENT_TIMESTAMP(3);
