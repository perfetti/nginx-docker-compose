#!/bin/bash
if [ ! -f .env ]; then
  export FRONTEND_BUILD_CONTEXT="https://${GH_TOKEN}@${FRONTEND_REPO_URL}#${FRONTEND_REF}"
  export API_BUILD_CONTEXT="https://${GH_TOKEN}@${API_REPO_URL}#${API_REF}"
  export BACKEND_BUILD_CONTEXT="https://${GH_TOKEN}@${BACKEND_REPO_URL}#${BACKEND_REF}"

  echo "" >> .env
  echo "FRONTEND_BUILD_CONTEXT='${FRONTEND_BUILD_CONTEXT}'" >> .env
  echo "API_BUILD_CONTEXT='${API_BUILD_CONTEXT}'" >> .env
  echo "BACKEND_BUILD_CONTEXT='${BACKEND_BUILD_CONTEXT}'" >> .env
fi

source .env