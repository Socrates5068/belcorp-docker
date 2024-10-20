# Función para actualizar un repositorio
function Update-Repo {
    param (
        [string]$dir
    )
    
    if (Test-Path $dir) {
        Write-Output "Actualizando el repositorio en $dir"
        Set-Location $dir
        
        # Verificar si es un repositorio git
        if (Test-Path ".git") {
            git pull origin main  # o reemplaza 'main' con la rama adecuada
            Write-Output "Repositorio en $dir actualizado correctamente."
        } else {
            Write-Output "El directorio $dir no es un repositorio git."
        }

        Set-Location ..
    } else {
        Write-Output "El directorio $dir no existe."
    }
}

# Actualizar los repositorios
Update-Repo "belcorp-backend"
Update-Repo "belcorp-frontend"
