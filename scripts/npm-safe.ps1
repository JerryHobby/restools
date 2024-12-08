param(
    [Parameter(Mandatory=$true)]
    [string]$command  # The npm command to run (e.g., "install", "build")
)

$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$dropboxControl = Join-Path $scriptPath "dropbox-control.ps1"

try {
    # Pause Dropbox
    Write-Host "Temporarily pausing Dropbox..."
    & $dropboxControl -action pause

    # Run the npm command
    Write-Host "Running npm $command..."
    npm $command

    # Resume Dropbox
    Write-Host "Resuming Dropbox..."
    & $dropboxControl -action resume
}
catch {
    Write-Error "An error occurred: $_"
    # Make sure to resume Dropbox even if there's an error
    & $dropboxControl -action resume
    exit 1
}
