# nginx-docker-compose

Example for a blog post about nginx docker compose

## Basic example

In the basic example, you will host static files with Nginx. The docker compose config is
defined in the `basic.yaml` file.

To run this you will execute:

```bash
docker compose up --build
```

Once the container is up and running, you can hit `http://localhost:8089/` it `/` will route you to FE react project by default.

`http://localhost:8089/backend/` will route you to the backend service.

`http://localhost:8089/api/` will route you to the backend service with the api path.
