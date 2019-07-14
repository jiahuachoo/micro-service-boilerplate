# micro-service-boilerplate
Boilerplate for micro-services projects. This provides a skeleton for Nodejs Rest API running in a docker container.
It uses travisCI but can be easily extended to other CI/CD platform such as Jenkins through the use of pipeline and the various scripts.

A docker-compose file is also added so that it can be easily extensible to include additional containers such as a database container.

# Installation
Install Docker CE or EE or Toolbox if running on older Windows machine.

# Travis-CI
https://travis-ci.org/jiahuachoo/micro-service-boilerplate

# Run
```
./run.sh
```

# Test
```
./test.sh
```

# Publish
The current image is pulled from jiahuachoo/micro-service-boilerplate. To change to a different repo, please make the appropriate changes to the build and publish shell scripts.

To build and publish a new image to Dockerhub:
```
EXPORT docker_hub_pwd=<your dockerhub password>
EXPORT docker_hub_user=<your dockerhub user>
./build-publish-img.sh
```

Note: specifying credentials through environment variable is not the most ideal and secured. A better way would be to use access token (refer to https://docs.docker.com/registry/spec/auth/)

