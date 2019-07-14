#!/bin/bash
docker-compose down -v
docker-compose up --build
docker-compose up