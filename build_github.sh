#!/bin/bash

# Set environment variables for GitHub build
export FRONTEND_BUILD_CONTEXT=https://${GH_TOKEN}@${FRONTEND_REPO_URL}#${FRONTEND_REF}
export API_BUILD_CONTEXT=https://${GH_TOKEN}@${API_REPO_URL}#${API_REF}
export BACKEND_BUILD_CONTEXT=https://${GH_TOKEN}@${BACKEND_REPO_URL}#${BACKEND_REF}

# Run Docker Compose
docker-compose -f compose.yaml up --build
