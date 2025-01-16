#!/bin/bash

# Set environment variables for local build
export FRONTEND_BUILD_CONTEXT=./repo_refs/react1-app
export API_BUILD_CONTEXT=./repo_refs/rails-app
export BACKEND_BUILD_CONTEXT=./repo_refs/react2-app

# Run Docker Compose
docker-compose -f compose.yaml up --build
