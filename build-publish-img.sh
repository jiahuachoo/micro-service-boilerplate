#!/bin/bash

# change to the appropriate repo if necessary
docker build --no-cache -f ./Dockerfile -t jiahuachoo/micro-service-boilerplate:latest .

echo "$docker_hub_pwd" | docker login -u "$docker_hub_user" --password-stdin

docker push jiahuachoo/micro-service-boilerplate:latest