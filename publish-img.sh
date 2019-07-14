#!/bin/bash
echo "$docker_hub_pwd" | docker login -u "$docker_hub_user" --password-stdin

# change to the appropriate repo if necessary
docker push jiahuachoo/micro-service-boilerplate:latest