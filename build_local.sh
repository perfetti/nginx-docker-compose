#!/bin/bash
source ./setup_local.sh

# Run Docker Compose
docker-compose --profile core -f docker-compose.local.yaml up --build -d
