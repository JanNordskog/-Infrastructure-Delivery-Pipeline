# Use Node.js LTS slim version
FROM node:20-slim

# Add non-root user
USER node

# Set working directory with proper permissions
WORKDIR /home/node/app

# Copy package files as node user
COPY --chown=node:node package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy application code
COPY --chown=node:node . .

# Set production environment
ENV NODE_ENV=production \
    PORT=8080

EXPOSE 8080

CMD ["npm", "start"]