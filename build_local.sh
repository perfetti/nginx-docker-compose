#!/bin/bash

source ./setup_local.sh

# Run Docker Compose
docker-compose -f compose.yaml up --build
