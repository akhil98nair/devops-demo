# DevOps VIT Demo

This is a simple Node.js application that provides a REST API for managing tasks. The application supports creating, reading, updating, and deleting tasks. It is containerized using Docker and includes a CI/CD pipeline configuration using Azure Pipelines.

# Getting Started

Follow these steps to set up and run the application on your local system:

## Prerequisites
1. Install [Node.js](https://nodejs.org/) (version 16 or higher recommended).
2. Install [Docker](https://www.docker.com/).
3. Clone this repository to your local machine.

## Installation
1. Navigate to the project directory:
   ```bash
   cd DevopsVITDemo
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Application
1. Start the application:
   ```bash
   node index.js
   ```
2. The application will run on `http://localhost:3000`.

## Using Docker
1. Build the Docker image:
   ```bash
   docker build -t simplenodejsapp .
   ```
2. Run the Docker container:
   ```bash
   docker run -d -p 3000:3000 simplenodejsapp
   ```

# API Endpoints

- **Create a Task**  
  `POST /tasks`  
  Example:
  ```bash
  curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d '{"title": "Sample Task", "completed": false}'
  ```

- **Get All Tasks**  
  `GET /tasks`  
  Example:
  ```bash
  curl -X GET http://localhost:3000/tasks
  ```

- **Get a Task by ID**  
  `GET /tasks/:id`  
  Example:
  ```bash
  curl -X GET http://localhost:3000/tasks/1
  ```

- **Update a Task by ID**  
  `PUT /tasks/:id`  
  Example:
  ```bash
  curl -X PUT http://localhost:3000/tasks/1 -H "Content-Type: application/json" -d '{"title": "Updated Task", "completed": true}'
  ```

- **Delete a Task by ID**  
  `DELETE /tasks/:id`  
  Example:
  ```bash
  curl -X DELETE http://localhost:3000/tasks/1
  ```

# Build and Test

## Build
To build the Docker image:
```bash
docker build -t simplenodejsapp .
```

## Test
The Azure Pipelines configuration includes a step to test the application by sending a sample POST request to the `/tasks` endpoint. You can also manually test the API using `curl` commands as shown above.

# Additional Resources

- [Azure Pipelines Documentation](https://docs.microsoft.com/en-us/azure/devops/pipelines/)
- [Express.js Documentation](https://expressjs.com/)
- [Docker Documentation](https://docs.docker.com/)