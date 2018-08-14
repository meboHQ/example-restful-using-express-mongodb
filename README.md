<p align="center">
  <img src="https://mebohq.github.io/docs/data/logo.png"/>
</p>

## RESTful example using Express and Mongodb
This example was adapted from the RESTful tutorial:
[build a restful api using node and express 4](https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4)

It covers the basics of Mebo's RESTful support:
[Mebo.restful](https://mebohq.github.io/docs/class/src/Handlers/Web.js~Web.html)

## Requirements
- Node 8 or greater
- Express 4 or greater
- Mongodb 3 or greater

## Running example
```
git clone https://github.com/meboHQ/example-restful-using-express-mongodb.git
cd example-restful-using-express-mongodb
npm install
NODE_ENV=development node .
```

## Actions
All
```
GET: http://localhost:8080/api/bears
```

Create
```
POST: http://localhost:8080/api/bears
```

Delete
```
DELETE: http://localhost:8080/api/bears/:id
```

Get
```
GET: http://localhost:8080/api/bears/:id
```

Update
```
PUT: http://localhost:8080/api/bears/:id
```

## Licensing
Mebo is free software; you can redistribute it and/or modify it under the terms of the MIT License
