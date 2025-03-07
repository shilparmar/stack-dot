# Node Backend App

This project is a Node.js application for the backend functionality of the User Eduction system.

## Getting Started

To get started with the Eduction system Node Backend App, please follow the steps below:

### 1. Clone the Project

```
git clone <repository-url>
```

### 2. Install Dependencies

```
yarn install
```

or

```
npm install
```

### 3. Create Postgres Database

Create a Postgres database for the application to use.

### 4. Create .env File

Create a `.env` file in the root directory of the project. You can copy the variables from the `.env-example` file and paste them into the `.env` file.

### 5. Set .env File Variables

In the `.env` file, update the variables with the appropriate values for your setup. This includes setting the database connection details, secret keys, and other configuration variables.

### 6. Run Sequelize

To create or update the database tables, run the following command:

```
yarn db-sync
```

or

```
npm run db-sync
```

### 7. Run the Application

To start the application, run the following command:

```
yarn dev
```

or

```
npm run dev
```

The application will start and listen for incoming requests.

## Contributing

If you'd like to contribute to the Eduction system Node Backend App, please follow the guidelines outlined in the project's README file.
