# SQL Backup and Restore Scripts

These scripts provide functionality to backup and restore the ResTools database tables.

## Backup Script (`SQL_Backup.bat`)

This script creates individual SQL backup files for each table in the database. The backups are stored in the `SQL_Backups` directory.

### Features:
- Creates separate backup file for each table
- Uses MariaDB's mysqldump tool
- Automatically reads database credentials from .env file
- Creates backup directory if it doesn't exist

### Tables Backed Up:
- Account
- Airline
- Airport
- Authenticator
- Country
- Faq
- Hub
- Region
- Session
- Time_Zone
- User
- VerificationToken

## Restore Script (`SQL_Restore.bat`)

This script restores the database tables from the backup files.

### Features:
- Restores each table individually
- Checks for existence of backup files
- Uses the same credentials as the backup script
- Reports any missing backup files

## Usage

### To Create Backups:
1. Ensure MariaDB 11.6 is installed in the default location
2. Make sure your .env file contains the correct database credentials
3. Run `SQL_Backup.bat`
4. Check the `SQL_Backups` directory for the generated .sql files

### To Restore from Backups:
1. Ensure MariaDB 11.6 is installed in the default location
2. Make sure your .env file contains the correct database credentials
3. Place the backup files in the `SQL_Backups` directory
4. Run `SQL_Restore.bat`

## Important Notes
- The scripts use the database credentials from your .env file
- Backup files are created in the `SQL_Backups` directory
- Each table has its own backup file named `tablename_data.sql`
- The restore script will skip any tables that don't have backup files
