Write-Host "Starting project"

# Define repositories 
$backend = "https://github.com/Socrates5068/belcorp-backend.git"
$frontend = "https://github.com/Socrates5068/belcorp-frontend.git"

$path = ".\"

if (-Not (Test-Path -Path $path)) {
    New-Item -ItemType Directory -Path $path
}

# Set path
Set-Location -Path $path

# Clone repositories
git clone $backend
git clone $frontend

Write-Host "Repositories was cloned in $path"
Write-Host "Installing dependencies... $path"

# Install dependencies
$backendPath = Join-Path $path "belcorp-backend"
$frontendPath = Join-Path $path "belcorp-frontend"

Set-Location -Path $backendPath
npm install
Write-Host "Dependencies installed for backend"

Set-Location -Path $frontendPath
npm install
Write-Host "Dependencies installed for frontend"

Write-Host "Finished."

# Return to original path
Set-Location -Path $path
