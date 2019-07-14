# micro-service-boilerplate
Boilerplate for micro-services projects. This provides a skeleton for Nodejs Rest API running in a docker container.
It uses travisCI but can be easily extended to other CI/CD platform such as Jenkins through the use of pipeline and the various scripts.

A docker-compose file is also added so that it can be easily extensible to include additional containers such as a database container.

# Installation
Install Docker CE or EE or Toolbox if running on older Windows machine.

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

To publish a new image to Dockerhub:
```
./build-img.sh

// you need to do docker login prior with your docker username and password
// docker login -u <username> -p <password> 

./publish-img.sh 
```

