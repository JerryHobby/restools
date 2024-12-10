# Database Rebuild Instructions

## Current State
- Schema is good (schema.prisma)
- Database needs clean rebuild
- Existing scripts are destructive - use with caution

## Data Sources
1. Aviation Data:
   - Source: OLDPROJECTS/AVIATION GitHub loader script
   - Tables: Airport, Airline, etc.

2. FAQ Data:
   - Sample data only
   - Can be regenerated
   - Not critical production data

3. Time_Zone Data:
   - Must be generated fresh
   - Source: Query Airport table where type='large_airport'
   - Need to map airports to IANA timezone strings
   - Format: iata, time_zone, createdAt, updatedAt

## Tools Available
- MariaDB Client: C:\Program Files\MariaDB 11.6\bin
- Current schema.prisma
- GitHub aviation data loader

## Rebuild Process
1. IMPORTANT: Verify no production data at risk

2. Database Reset:
   - Clear Prisma migration history
   - Fresh database initialization
   - Use schema.prisma as source of truth

3. Data Population Order:
   a. Base Aviation Data:
      - Use GitHub loader for airports/airlines
      - Verify data integrity after load
   
   b. Time_Zone Table:
      - Query large airports
      - Map to IANA timezones
      - Generate and verify insert script
   
   c. FAQ Sample Data:
      - Generate after core tables
      - Use consistent sample data

## Critical Warnings
1. DO NOT:
   - Run destructive scripts without verification
   - Drop tables without backup plan
   - Mix migration states
   
2. ALWAYS:
   - Verify data before deletion
   - Test scripts on sample data
   - Build systematically
   - Document each step

## Recovery Resources
- schema.prisma: Source of truth for structure
- OLDPROJECTS/AVIATION: Source for aviation data
- Existing database for structure reference

## Notes
- Migrations may conflict due to FAQ/Faq rename
- Preserve schema.prisma - it's correct
- Build methodically, verify each step
- Document any new issues encountered
