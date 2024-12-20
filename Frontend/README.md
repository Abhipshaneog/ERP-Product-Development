## Prerequisites

Before you begin, ensure you have the following installed:

- **[Docker](https://www.docker.com/get-started)**: Make sure Docker is installed and running.
- **[Docker Compose](https://docs.docker.com/compose/install/)**: This will help you manage multi-container Docker applications.

## Setup and Installation

You can run this project in a Docker container to avoid setup issues and maintain consistency across different environments.

### With Docker

To set up and run the application using Docker and Docker Compose:

1. Clone this repository:
   ```bash
   git clone https://github.com/SwarnadeepDeb/Galvinus-Ecommerce-Website.git
   cd my-react-app
   ```

2. Build and run the containerized application using Docker Compose:
   ```bash
   docker-compose up
   ```

   - Docker Compose will:
     - Build the Docker image for your app.
     - Install dependencies inside the container.
     - Expose the app on port `5173`.

3. Once the container is up and running, open your browser and navigate to:
   ```bash
   http://localhost:5173
   ```

   You should see the Vite-powered React application running!

### File Structure

Your project should look like this:

```
my-react-app
  ├── node_modules
  ├── public
  ├── src
  ├── .gitignore
  ├── eslint.config.js
  ├── index.html
  ├── package-lock.json
  ├── package.json
  ├── README.md
  ├── vite.config.js
  ├── Dockerfile
  └── docker-compose.yml
```

## Running the App

To start the application, use the following command:
```bash
docker-compose up
```

This will:
- Build the Docker image from the `Dockerfile`.
- Install dependencies using `npm install` inside the container.
- Start the Vite development server.

## Stopping the App

To stop the container, run:
```bash
docker-compose down
```
This will stop and remove the container, but your data and application files remain intact.
