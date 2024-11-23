# Express API with Docker

A simple Express.js API with Docker containerization and CI/CD pipeline.

## Features

- Express.js REST API
- Docker containerization
- GitHub Actions CI/CD
- Automated testing
- MySQL database support

## Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose
- Git

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run with Docker:
```bash
docker-compose up
```

## API Endpoints

- `GET /`: Welcome message
- `GET /user/:id`: Get user by ID
- `POST /user`: Create new user
- `GET /echo`: Echo message

## Testing

Run the test suite:
```bash
npm test
```

## Deployment

The application can be deployed using Docker. The CI/CD pipeline automatically builds and tests the application on every push to main.

### Environment Variables

- `PORT`: Application port (default: 8080)
- `NODE_ENV`: Environment (development/production)
- `MYSQL_ROOT_PASSWORD`: Database root password
- `MYSQL_DATABASE`: Database name
- `MYSQL_USER`: Database user
- `MYSQL_PASSWORD`: Database password

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.