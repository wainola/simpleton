FROM node:10.15.0 AS build-stage
WORKDIR /usr/client
COPY package*.json ./

RUN npm install --silent
COPY . .
