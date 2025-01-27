#!/bin/bash
source ./setup_local.sh

# Run Docker Compose
docker-compose --profile baseServices -f docker-compose.local.yaml up --build -d
