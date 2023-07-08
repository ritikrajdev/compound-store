# Compounds Store

This readme file provides instructions on getting started with the app using both Docker and without Docker.

## Prerequisites

Make sure you have the following installed on your system:

- Docker (only required if using Docker): You can download and install Docker from the official website ([https://www.docker.com](https://www.docker.com)).

ALTERNATIVELY

- Node.js: You can download and install Node.js from the official website ([https://nodejs.org](https://nodejs.org)). Make sure to install a version compatible with the app (Node.js 20-alpine).
- MySQL: If you're not using Docker, make sure you have MySQL installed and running on your system.

## Getting Started with Docker

To get started with the app using Docker, follow the steps below:

1. Clone the repository containing the Docker configuration and navigate to its root directory.

2. Open a terminal or command prompt and run the following command to build and start the Docker containers:

   ```
   docker-compose up
   ```

   This command will download the necessary Docker images and start the MySQL, server, and client containers.

3. Wait for the containers to start and the necessary dependencies to be installed. You will see logs in the terminal indicating the progress.

4. Once the containers are up and running, you can access the app using the following URLs:

   - Server: [http://localhost:8000](http://localhost:8000)
   - Client: [http://localhost:4200](http://localhost:4200)

   The server runs on port 8000, and the client runs on port 4200.

5. You can now interact with the app through your web browser. The client interface should be accessible at [http://localhost:4200](http://localhost:4200).

6. To stop the app and shut down the Docker containers, press `Ctrl + C` in the terminal or command prompt where you started the containers. Docker will gracefully stop the containers and clean up the resources.

## Getting Started without Docker

To get started with the app without using Docker, follow the steps below:

1. Clone the repository containing the app code and navigate to its root directory.

2. Make sure you have MySQL installed and running on your system. Create a database named "compoundDB" with the following credentials:

   - Host: `localhost`
   - Port: `3306`
   - User: `root`
   - Password: `root`

3. Open a terminal or command prompt and navigate to the `server` directory.

4. Run the following command to install the server dependencies:

   ```
   npm install
   ```

5. Once the server dependencies are installed, run the following command to start the server:

   ```
   npm run dev:withDB
   ```

   The server will start running on port 8000.

6. Open another terminal or command prompt and navigate to the `client` directory.

7. Run the following command to install the client dependencies:

   ```
   npm install
   ```

8. Once the client dependencies are installed, run the following command to start the client:

   ```
   npm start
   ```

   The client will start running on port 4200.

9. You can now access the app using the following URLs:

   - Server: [http://localhost:8000](http://localhost:8000)
   - Client: [http://localhost:4200](http://localhost:4200)

   The server runs on port 8000, and the client runs on port 4200.

10. To stop the app, go to each terminal or command prompt where the server and client are running and press `Ctrl + C` to stop the respective processes.
