FROM node:22-slim AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npx prisma generate
EXPOSE 8000
CMD ["sh", "-c", "npx prisma db push && node prisma/seed.js && node src/index.js"]
