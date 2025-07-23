#!/bin/bash
source .env

# Set environment variables for local build
export FRONTEND_BUILD_CONTEXT=./repo_refs/react1-app
export API_BUILD_CONTEXT=./repo_refs/rails-app
export BACKEND_BUILD_CONTEXT=./repo_refs/react2-app

echo $FRONTEND_BUILD_CONTEXT
echo $API_BUILD_CONTEXT
echo $BACKEND_BUILD_CONTEXT

# Run Docker Compose
./bin/up_local.sh