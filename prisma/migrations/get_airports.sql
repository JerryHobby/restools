SELECT a.iata_code, a.name, a.municipality, c.name as country, a.latitude_deg, a.longitude_deg
FROM Airport a
JOIN Country c ON a.iso_country = c.code
WHERE a.iata_code LIKE '___' 
AND a.type IN ('large_airport', 'medium_airport')
ORDER BY a.iata_code;
