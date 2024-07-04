FROM oven/bun:latest
WORKDIR /app
COPY . .
RUN bun install
RUN bun run build
RUN bun run compile
CMD ["./dist/start"]