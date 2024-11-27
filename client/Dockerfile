# Use a Node.js base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm && pnpm --version

# Copy package.json and pnpm-lock.yaml first to leverage Docker's build cache
COPY package.json pnpm-lock.yaml ./

# Install frontend dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

RUN pnpm run build

# Build the Next.js app (for production usage, you can use `pnpm build`)
# RUN pnpm run build

# Expose the port your Next.js app runs on
EXPOSE 3010

# Default command to run Next.js
CMD ["pnpm", "start"]
