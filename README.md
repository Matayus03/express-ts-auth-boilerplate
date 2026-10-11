# Express TypeScript Auth Boilerplate

This is an authentication module, developed with Node.js, Express, Typescript and PostgreSQL.

## Technologies used
-Node.js & Express
-TypeScript
-PostgreSQL("pg")
-JSON Web Token (JWT)
-bcrypt

-------------------------------------------------------------------------------------------------------------

## Installation

1. clone the repository:
```bash
    git clone https://github.com/Matayus03/express-ts-auth-boilerplate.git
```

2. install dependencies:
```bash
    npm install 
```

3. configure environment variables.
    An .env.example file is provided as a template for configuring the environment variables
    required by the application.

    Copy the example file to create your own .env file:

    cp .env.example .env

    Then update the values in .env according to your local environment, including
    your PostgreSQL database credentials and JWT secret.    

4. configure the Database.
    Make sure PostgreSQL is running and create the database you want to use.
        Execute the schema.sql file to create the required tables and database strcture.
        Alternatively, you can use your own database schema, provided it is compatible with the application

