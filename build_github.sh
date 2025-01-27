#!/bin/bash
./setup_github.sh

# Run Docker Compose without local volumes
docker-compose --profile baseServices -f docker-compose.yaml up --build --no-deps -d
