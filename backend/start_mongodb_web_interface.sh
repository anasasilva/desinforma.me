#!/bin/bash
docker stop mongodbclient 2>/dev/null
docker start mongodbclient || docker run -p 3000:3000 --name mongodbclient mongoclient/mongoclient:4.0.1
echo Nosqlclient started at localhost:3000