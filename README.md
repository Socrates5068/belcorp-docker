# Belcorp
## Installation on Windows
Belcorp requires [Docker](https://www.docker.com/) to run.

Verify the script execution permission:
```sh
Get-ExecutionPolicy
```

If the policy is Restricted, change it to RemoteSigned:
```
Set-ExecutionPolicy RemoteSigned
```
Run the initialization script:
```sh
.\scripts\init-repositories.ps1
```

Start the containers with Docker Compose:
```sh
docker compose up -d
```

Down the containers with Docker Compose:
```sh
docker compose down
```

## Installation on MacOs (soon)

## Other helpfull commands

In order to reset DB
```sh
docker compose down -v
```

To build app after install a new dependenci
```sh
docker compose up -d --build
```

## License

MIT