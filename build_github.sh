#!/bin/bash
source .env

# Run Docker Compose without local volumes
docker-compose up --build --no-deps -d
