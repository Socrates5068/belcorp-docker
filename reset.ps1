#!/bin/bash

# Detener y eliminar contenedores, redes, volúmenes e imágenes creados por `up`.
Write-Output "Ejecutando docker compose down -v"
docker compose down -v

# Construir, (re)crear, iniciar y conectar a contenedores en segundo plano.
Write-Output "Ejecutando docker compose up -d --build"
docker compose up -d --build
