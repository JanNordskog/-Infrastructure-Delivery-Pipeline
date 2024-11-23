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

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment. The pipeline is triggered on:
- Push to main branch
- Pull requests to main branch

### Pipeline Stages

1. **Test Stage**
   - Runs on: Ubuntu latest
   - Node.js version: 20.x
   - Steps:
     - Checkout code
     - Setup Node.js
     - Install dependencies
     - Run tests
     - Run security audit

2. **Docker Build Stage**
   - Runs after successful test stage
   - Only triggers on main branch
   - Steps:
     - Build Docker image
     - Test container functionality
     - Tag image with commit SHA

### Pipeline Configuration

The pipeline configuration is located in `.github/workflows/ci.yml`. To configure the pipeline, you need to:

1. Configure GitHub repository secrets:
   ```
   DOCKERHUB_USERNAME: Your Docker Hub username
   DOCKERHUB_TOKEN: Your Docker Hub access token
   ```

2. Branch protection rules (recommended):
   - Require pull request reviews
   - Require status checks to pass
   - Require up-to-date branches

### Pipeline Status

You can view the pipeline status:
- In GitHub Actions tab
- Via status badges in README
- In pull request checks

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

### Development Workflow

1. Create a feature branch from main
2. Make your changes
3. Ensure tests pass locally (`npm test`)
4. Push changes and create PR
5. Wait for CI pipeline to complete
6. Address any review comments
7. Merge once approved

## License

This project is licensed under the MIT License.