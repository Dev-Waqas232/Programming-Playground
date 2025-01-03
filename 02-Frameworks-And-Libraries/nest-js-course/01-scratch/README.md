# Creating a NestJS Project from Scratch

## 1-First step is to install some core dependencies that nestjs requires:

- @nestjs/common => Majority of functions that we use while building a nest app comes from this package

- @nestjs/platfrom-express => NestJS doesn't handle incoming requests by itself. It relies on Express or Fastify for handling http requests and responses ( by default it uses express )

- reflect-metadata => This library is tied with decorators

- typescript => Just because nestjs uses typescript

## 2-Configure Typescript in tsconfig.json

```javascript

{
"compilerOptions": {
"module": "CommonJS",
"target": "ES2017",
"experimentalDecorators": true,
"emitDecoratorMetadata": true
    }
}

```

### How Request and Response processes in the server

1- Validate data contained in the request ( maybe from body or params )
2- Make sure user is authenticated and authorized
3- Route the request to the particular function
4- Run some buisness login
4- Access the database

### Nest tools for handling all the above things

1- Pipe for validations
2- Guard for Authentication & Authorization
3- Controllers for routing logic
4- Services for handling buisness logic
5- Repository for accessing database

### Fundamental Parts of NestJS

- Controllers => For handling incoming requests
- Services => For handling data access and buisness logic
- Modules => Groups together everything
- Pipes => Validating incoming data
- Filters => Handles errors that occurs during request handling
- Guards => Handles authentication
- Interceptors => Add extra logic to incoming requests and outgoing responses
- Repositories => Handles data stored in the database

* main.ts => file that runs whenever our server starts

## 3-Creating a module and a controller

Controllers and Module are the two basic and core components to get started

## 4-Start the project
