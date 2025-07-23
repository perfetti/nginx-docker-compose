#!/bin/bash

#  We need this for proper circleci builds.
if [ ! -f .env ]; then
  export FRONTEND_BUILD_CONTEXT="https://${GH_TOKEN}@${FRONTEND_REPO_URL}#${FRONTEND_REF}"
  export API_BUILD_CONTEXT="https://${GH_TOKEN}@${API_REPO_URL}#${API_REF}"
  export BACKEND_BUILD_CONTEXT="https://${GH_TOKEN}@${BACKEND_REPO_URL}#${BACKEND_REF}"
  echo "FRONTEND_BUILD_CONTEXT=${FRONTEND_BUILD_CONTEXT}" >> .env
  echo "API_BUILD_CONTEXT=${API_BUILD_CONTEXT}" >> .env
  echo "BACKEND_BUILD_CONTEXT=${BACKEND_BUILD_CONTEXT}" >> .env
fi

source .env

export FRONTEND_BUILD_CONTEXT="https://${GH_TOKEN}@${FRONTEND_REPO_URL}#${FRONTEND_REF}"
export API_BUILD_CONTEXT="https://${GH_TOKEN}@${API_REPO_URL}#${API_REF}"
export BACKEND_BUILD_CONTEXT="https://${GH_TOKEN}@${BACKEND_REPO_URL}#${BACKEND_REF}"

# Create temporary container to copy nginx config
# This is done because CircleCi doesn't play well with nginx like that.
docker volume create project_nginx_conf
docker container create --name nginx_tmp -v project_nginx_conf:/etc/nginx/conf.d alpine
docker cp nginx/default.conf nginx_tmp:/etc/nginx/conf.d/
docker compose exec nginx nginx -s reload
docker rm nginx_tmp

# Run Docker Compose without local volumes
docker-compose --profile core up --build --no-deps -d
