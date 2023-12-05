# Build Stage
FROM node:18-alpine as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
RUN yarn add sharp --ignore-engines
COPY . .

# Production Stage
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app .
EXPOSE 8000
CMD ["yarn", "dev"]
