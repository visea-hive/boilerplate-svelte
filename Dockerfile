FROM oven/bun:1 AS builder
WORKDIR /app

# Copy dependency files
COPY package.json bun.lock ./

# Install all dependencies (including devDependencies) needed for build
RUN bun install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the SvelteKit app
RUN bun run build

# Stage for production dependencies
FROM oven/bun:1 AS prod-deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app

# Copy built assets and production dependencies
COPY --from=builder /app/build ./build
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Expose port and set environment variables
EXPOSE 3000
ENV NODE_ENV=production
ENV PORT=3000

# Start the Node SvelteKit server
CMD ["node", "build/index.js"]
