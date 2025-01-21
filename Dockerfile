# Use a base image with Docker and Docker Compose installed
FROM docker/compose:latest

# Set the working directory
WORKDIR /app

# Copy the entire project into the container
COPY . .

RUN docker-compose -f docker-compose.yaml up --build --no-deps

# Build and run the test service using Docker Compose
CMD ["docker", "compose", "run", "test", "cypress", "run"]
