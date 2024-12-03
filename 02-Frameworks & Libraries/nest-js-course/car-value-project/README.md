## Nest JS Practical Project

### Database Implementation

NestJS works with many database ORMs but it works quite well with TypeORM and mongoose. In this project, we are going to use TypeORM

```javascript
npm i @nestjs/typeorm typeorm sqlite3
```

### Setting up TypeOrm

In the app.module.ts file:

```javascript
import { TypeOrmModule } from '@nestjs/typeorm';

imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // type of the database
      database: 'db.sqlite', // name of the database
      entities: [], // list all of your entities
      synchronize: true, // when sets true, it automatically migrates our entities into the database and create or change our table
    }),
    UsersModule,
    ReportsModule,
],
```

### Creating an Entity

1. Create the file like user.entity.ts in your module. Create a class in it like this:

```javascript
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
```

2. Connect it to the parent module. It will create the repository for us automatically

```javascript
In user.module.ts
import { User } from './user.entity'; // import our entity

@Module({
  imports: [TypeOrmModule.forFeature([User])], // this step would generate a repository for us automatically
  controllers: [UsersController],
  providers: [UsersService],
})
```

3. Register the entity in the root module

```javascript
In app.module.ts

import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
```
