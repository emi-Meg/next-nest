# Use a lightweight Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of your app's source code
COPY . .

# Generate Prisma client
# RUN pnpx prisma generate

# Build app
RUN pnpm run build

# Expose the backend port
EXPOSE 3011

# Command to run the NestJS application with Fastify
CMD ["pnpm", "run", "start:prod"]
