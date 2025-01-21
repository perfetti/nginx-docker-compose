#!/bin/bash
source ./setup_github.sh

# Run Docker Compose without local volumes
docker-compose -f compose.yaml up --build --no-deps
