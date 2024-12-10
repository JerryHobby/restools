@echo off
echo Creating SQL backups...

REM Create backup directory if it doesn't exist
if not exist "SQL_Backups" mkdir "SQL_Backups"

REM Set MariaDB path and credentials
set MYSQL_PATH=C:\Program Files\MariaDB 11.6\bin
set HOST=jerryhobby.com
set USER=restools
set DB=restools
set PORT=3306

REM Get password from DATABASE_URL in .env file
for /f "tokens=3 delims=:" %%a in ('type ..\.env ^| findstr "DATABASE_URL"') do set TEMP_STR=%%a
for /f "tokens=1 delims=@" %%a in ("%TEMP_STR%") do set PASSWORD=%%a

REM Tables to backup
set TABLES=Account Airline Airport Authenticator Country Faq Hub Region Session Time_Zone User VerificationToken

REM Backup each table
for %%t in (%TABLES%) do (
    echo Backing up %%t...
    "%MYSQL_PATH%\mysqldump" -h %HOST% -P %PORT% -u %USER% -p%PASSWORD% %DB% %%t > "SQL_Backups\%%t_data.sql"
)

echo Backup complete. Files are in the SQL_Backups directory.