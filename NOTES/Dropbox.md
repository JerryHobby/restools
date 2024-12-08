# Dropbox Management

## Overview
This project includes utility scripts to manage Dropbox synchronization during development. These scripts help prevent conflicts between npm operations and Dropbox sync, which can cause issues with `node_modules` and other development operations.

## Scripts Location
- `scripts/dropbox-control.ps1`: Main Dropbox control script
- `scripts/npm-safe.ps1`: npm wrapper that automatically handles Dropbox pausing

## Usage

### Safe npm Operations
Use the npm-safe wrapper script for npm operations that might conflict with Dropbox:

```powershell
# Install dependencies
.\scripts\npm-safe.ps1 -command "install"

# Build the project
.\scripts\npm-safe.ps1 -command "build"

# Any other npm command
.\scripts\npm-safe.ps1 -command "your-command"
```

### Direct Dropbox Control
Control Dropbox sync manually using the control script:

```powershell
# Check current Dropbox status
.\scripts\dropbox-control.ps1 -action status

# Pause Dropbox for 1 hour
.\scripts\dropbox-control.ps1 -action pause -duration 60

# Pause Dropbox indefinitely
.\scripts\dropbox-control.ps1 -action pause

# Resume Dropbox sync
.\scripts\dropbox-control.ps1 -action resume
```

## Common Issues

### Known Issues
1. npm operations can fail when Dropbox is actively syncing the `node_modules` directory
2. Build operations might be slower when Dropbox is syncing
3. File locks can prevent npm from properly updating packages

### Solutions
1. Always use the `npm-safe.ps1` script for npm operations
2. For manual control, pause Dropbox before major operations
3. If issues persist:
   - Manually pause Dropbox from the system tray
   - Delete the `node_modules` folder and reinstall with Dropbox paused
   - Resume Dropbox after operations are complete

## Script Configuration

### Dropbox Path
The script is configured to use Dropbox from the following location:
```
C:\Program Files (x86)\Dropbox\Client\Dropbox.exe
```

If your Dropbox installation is in a different location, update the `$dropboxPath` variable in `dropbox-control.ps1`.

### Fallback Paths
The script will check these locations if the primary path fails:
- `%LOCALAPPDATA%\Dropbox\Client\Dropbox.exe`
- `%ProgramFiles%\Dropbox\Client\Dropbox.exe`
- `%APPDATA%\Dropbox\bin\Dropbox.exe`

## Best Practices

1. **Before Starting Development:**
   - Check Dropbox sync status
   - Consider pausing sync for your development session

2. **During Development:**
   - Use `npm-safe.ps1` for all npm operations
   - For large operations, pause Dropbox for longer durations

3. **After Development:**
   - Ensure Dropbox is resumed
   - Allow sync to complete before shutting down

4. **For CI/CD:**
   - Consider adding Dropbox control to your CI/CD scripts
   - Use longer pause durations for build processes
