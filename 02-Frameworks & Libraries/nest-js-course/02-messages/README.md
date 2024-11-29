# Creating Projects using Nest Cli ( Creating a messages app )

## Functionalities

1. Getting the list of all messages
2. Creating a new message
3. Getting a single message

A json file will be used for storing data

## Using Nest Cli

```javascript
nest new <project-name>
```

## Add Automatic Validation

1. Install two packages

```javascript
npm i class-validator
npm i class-transformer
```

2. Telling nest to use global validations

```javascript
app.useGlobalPipes(new ValidationPipe());
```

This will enable validations among all the incoming requests.

3. Create class to describe all the properties and types a request body should have

   - This class is known as Data Transfer Objects ( DTOs )

   * Folder should be created with the name dto, then creating the file name with following convention i.e, create-message.dto.ts

   * Create and export a class with same name i.e, CreateMessageDto

4. Add validation rules to the class

   - Import decorators from class-validator and add them to the properties

5. Apply that class to the request handler

   - Import that dto class and apply to request bodies

## How Validation Pipe works

1. It takes the body and turn it into an instance of Dto class using class-transformer package
2. It uses class-validator to validate that instance
3. If there is any error, it would return that otherwise it would provide body to request handler
