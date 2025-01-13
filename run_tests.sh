#!/bin/bash
set -e

echo "Starting services with Docker Compose..."
docker compose up --build -d

echo "Waiting for services to be ready..."
while ! docker compose ps nginx | grep -q "running" ; do
  echo "Waiting for nginx service..."
  sleep 1
done

echo "Installing test dependencies..."
cd test
npm install

echo "Running Cypress tests..."
npx cypress run

echo "Cleaning up..."
cd ..
docker compose down -v
