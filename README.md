# Task Management Microservices Application

A microservices-based task management system built with Node.js, Express, MongoDB and Docker.

## Architecture Overview

The application consists of two main microservices:
- **User Service** (Port 3001): Handles user management operations
- **Task Service** (Port 3002): Manages task-related operations

## Services Description

### User Service
- User creation 
- Get all users
- Runs on port 3001
- Independent database for user data

### Task Service
- Task creation 
- Get all tasks 
- Runs on port 8082
- Separate database for task data

## Technical Stack

- Node.js
- Express
- MongoDB
- Docker
- Docker Compose

## Running the Application

1. Build the services:
```bash
docker-compose build
```

2. Start all services:
```bash
docker-compose up
```

3. Access the services:
- User Service: `http://localhost:3001`
- Task Service: `http://localhost:3002`

## Docker Configuration

The `docker-compose.yml` file orchestrates:
- User Service container
- Task Service container
- Database containers
- Network configuration
- Port mappings

## API Documentation

### User Service Endpoints
- POST `/api/v1/users` - Create new user
- GET `/api/v1/users/` - Get all users

### Task Service Endpoints
- POST `/api/v1/tasks` - Create new task
- GET `/api/v1/tasks` - List all tasks

## Development and Deployment

1. Clone the repository
2. Install Docker and Docker Compose
3. Run `docker-compose up` to start all services
4. Access the endpoints through respective ports

## License

This project is licensed under the MIT License.