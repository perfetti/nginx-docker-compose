#!/bin/bash
./setup_github.sh

# Run Docker Compose without local volumes
docker-compose up --build --no-deps -d
