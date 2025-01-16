# Docker compose managed test harness

Example for a blog post about nginx docker compose

## Setup

To run this you will execute one of the following commands depending on your build source:

### Local Build

To build from local directories, run:

```bash
./build_local.sh
```

Once built to run the containers:

```bash
./up_local.sh
```

### GitHub Build

To build from GitHub repositories, run:

```bash
./build_github.sh
```

Once built to run the containers:

```bash
./up_github.sh
```

Once the container is up and running, you can hit `http://localhost:8089/` it `/` will route you to FE react project by default.

`http://localhost:8089/backend/` will route you to the backend service.

`http://localhost:8089/api/` will route you to the backend service with the api path.
