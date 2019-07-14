#!/bin/bash
docker-compose down -v
docker-compose run micro-service npm test