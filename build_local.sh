#!/bin/bash
source ./setup_local.sh

# Run Docker Compose
docker-compose -f docker-compose.local.yaml up --build
