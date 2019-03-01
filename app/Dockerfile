FROM node:10.15.0 AS build-stage

# RUN curl -o- -L https://yarnpkg.com/install.sh | bash

WORKDIR /usr/client
COPY package*.json ./

RUN npm install --silent
RUN npm install --save acorn
# RUN sudo chown -R $USER:$USER /usr/client/.next/

COPY . .
