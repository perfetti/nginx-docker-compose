# Docker compose managed test harness

Example for a blog post about nginx docker compose

## Prerequisites
- Github token with these repos in scope. `GH_TOKEN`
- `docker`
- `docker compose`
- `git`

## Setup
Set your environment variables & initialize submodules
```bash
cp .env.sample .env
echo "GH_TOKEN=<SuperSecretGithubToken>" > .env
source .env

git submodule sync
git submodule update --init --recursive

./bin/build_local.sh
```


## Build the Environments

To run this you will execute one of the following commands depending on your build source:

### Local Build

To build from local directories, run:

```bash
./bin/build_local.sh
```

This setup allows for hot-swapping of code. Any changes made in the `repo_refs` directories will be immediately reflected in the running containers, allowing developers to see their changes in real-time via the nginx server.

### GitHub Build

To build from GitHub repositories, run:

```bash
./bin/build_github.sh
```

The GitHub build process is isolated from the local development environment, ensuring a clean and isolated build environment. This prevents any potential conflicts with local volumes.

### CircleCi Oddities

Checkout `.circleci/config.yml` to see how circleci is being run.

You'll notice that the build_github.sh script does not share volumes to inject the default.conf into nginx. This is because circleci does not allow volume sharing between the host and the docker executor. This is a limitation of the circleci platform, and not a limitation of docker.
As such we copy the nginx file into the container after the build process and restart the nginx service.

CircleCI is also not a huge fan of docker compose port forwarding, so we run the tests from inside their docker container to be able to access the ngninx service on the network.

## Once Built

Once the container is up and running, you can hit `http://localhost:8089/` it `/` will route you to FE react project by default.

`http://localhost:8089/backend/` will route you to the backend service.

`http://localhost:8089/api/` will route you to the backend service with the api path.


## Running the Test suite

In the directory `test` you'll find a cypress test suite. In here is our business logic testing. It is a marvel of modern cypriotic book approval/censorship.  After you have `bin/build_local.sh` running, follow the instructions in `./test/README.md` and boot up the Cypress tests.

## What on earth are these services?
React1(localhost:8089/) - a frontend application allowing users to reccomend books for listing.
React2(localhost:8089/backend) - Super secret admin panel app allowing admins to approve or deny books for listing
Rails(localhost:8089/api/books) - Api holding the data, performing business logic. ¡Truly revolutionary!
