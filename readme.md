# Simple Express API

A lightweight Express.js API that demonstrates basic REST endpoints with Docker support.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Docker (optional, for containerization)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

## Project Structure

```
project-root/
├── src/
│   └── index.js    # Main application file
├── package.json
├── Dockerfile
└── README.md
```

## Environment Variables

The application uses the following environment variables:

- `PORT`: Server port (default: 8080)

## Running the Application

### Local Development

1. Start the server:
```bash
npm start
```

2. The API will be available at `http://localhost:8080`

### Using Docker

1. Build the Docker image:
```bash
docker build -t express-api .
```

2. Run the container:
```bash
docker run -p 8080:8080 express-api
```

## API Endpoints

### GET /
Returns a welcome message.

```bash
curl http://localhost:8080/
```

Response:
```json
{
  "message": "Docker is easy 🐳"
}
```

### GET /user/:id
Returns user information for the specified ID.

```bash
curl http://localhost:8080/user/123
```

Response:
```json
{
  "id": "123",
  "name": "User 123",
  "email": "user123@example.com"
}
```

### POST /user
Creates a new user. Requires name and email in the request body.

```bash
curl -X POST http://localhost:8080/user \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com"}'
```

Response:
```json
{
  "id": 1700845632899,
  "name": "John Doe",
  "email": "john@example.com"
}
```

### GET /echo
Echoes back the message provided in the query parameter.

```bash
curl http://localhost:8080/echo?message=hello
```

Response:
```json
{
  "echo": "hello"
}
```

## Docker Configuration

Create a `Dockerfile` in your project root:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "src/index.js"]
```

## Development

To start the application in development mode with hot-reloading:

1. Install nodemon:
```bash
npm install --save-dev nodemon
```

2. Add this script to your package.json:
```json
{
  "scripts": {
    "dev": "nodemon src/index.js"
  }
}
```

3. Run the development server:
```bash
npm run dev
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.