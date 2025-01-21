# Use a base image with Docker and Docker Compose installed
FROM docker/compose:latest

# Set the working directory
WORKDIR /app

# Copy the entire project into the container
COPY . .

RUN ./setup_test.sh && docker-compose up --build -d

# Build and run the test service using Docker Compose
CMD []
