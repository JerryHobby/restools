@echo off
echo Restoring SQL backups...

REM Set MariaDB path and credentials
set MYSQL_PATH=C:\Program Files\MariaDB 11.6\bin
set HOST=jerryhobby.com
set USER=restools
set DB=restools

REM Get password from .env file
for /f "tokens=2 delims==" %%a in ('type ..\.env ^| findstr "DATABASE_PASSWORD"') do set PASSWORD=%%a
set PASSWORD=%PASSWORD:"=%

REM Tables to restore
set TABLES=Account Airline Airport Authenticator Country Faq Hub Region Session Time_Zone User VerificationToken

REM Restore each table
for %%t in (%TABLES%) do (
    if exist "SQL_Backups\%%t_data.sql" (
        echo Restoring %%t...
        "%MYSQL_PATH%\mysql" -h %HOST% -u %USER% -p%PASSWORD% %DB% < "SQL_Backups\%%t_data.sql"
    ) else (
        echo Warning: Backup file for %%t not found
    )
)

echo Restore complete.
