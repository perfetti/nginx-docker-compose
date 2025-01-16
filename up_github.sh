#!/bin/bash

source ./setup_github.sh

# Run Docker Compose
docker-compose -f compose.yaml up
