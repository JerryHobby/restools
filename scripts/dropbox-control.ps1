param(
    [Parameter(Mandatory=$false)]
    [string]$action = "status",  # status, pause, resume
    [Parameter(Mandatory=$false)]
    [int]$duration = 0  # duration in minutes for pause
)

# Primary Dropbox location (known working path)
$dropboxPath = "C:\Program Files (x86)\Dropbox\Client\Dropbox.exe"

# Fallback paths if primary location changes
$fallbackPaths = @(
    "${env:LOCALAPPDATA}\Dropbox\Client\Dropbox.exe",
    "${env:ProgramFiles}\Dropbox\Client\Dropbox.exe",
    "${env:APPDATA}\Dropbox\bin\Dropbox.exe"
)

# If primary path doesn't exist, try fallbacks
if (-not (Test-Path $dropboxPath)) {
    foreach ($path in $fallbackPaths) {
        if (Test-Path $path) {
            $dropboxPath = $path
            break
        }
    }
}

function Get-DropboxStatus {
    $status = & $dropboxPath status
    return $status
}

function Pause-Dropbox {
    Write-Host "Pausing Dropbox sync..."
    & $dropboxPath pause
}

function Resume-Dropbox {
    Write-Host "Resuming Dropbox sync..."
    & $dropboxPath resume
}

# Check if Dropbox.exe exists
if (-not (Test-Path $dropboxPath)) {
    Write-Error "Dropbox.exe not found in common locations. Please update the script with the correct path."
    Write-Host "Searched locations:"
    Write-Host "  $dropboxPath (Primary)"
    $fallbackPaths | ForEach-Object { Write-Host "  $_" }
    exit 1
}

switch ($action.ToLower()) {
    "status" {
        Get-DropboxStatus
    }
    "pause" {
        Pause-Dropbox
        if ($duration -gt 0) {
            Write-Host "Dropbox sync paused for $duration minutes"
            Start-Job -ScriptBlock {
                param($mins, $dropboxPath)
                Start-Sleep -Seconds ($mins * 60)
                & $dropboxPath resume
                Write-Host "Dropbox sync resumed automatically after $mins minutes"
            } -ArgumentList $duration, $dropboxPath
        }
    }
    "resume" {
        Resume-Dropbox
    }
    default {
        Write-Error "Invalid action. Use: status, pause, or resume"
        exit 1
    }
}
