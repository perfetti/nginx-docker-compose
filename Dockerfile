# Use a base image with Docker and Docker Compose installed
FROM docker/compose:latest

# Set the working directory
WORKDIR /app

# Copy the entire project into the container
COPY . .

# Build and run the test service using Docker Compose
CMD ["docker-compose", "up", "--build", "test"]
