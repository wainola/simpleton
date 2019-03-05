FROM node:10.15.0
WORKDIR /usr/server
COPY package*.json /usr/server/

RUN npm install --silent
COPY . .
RUN cd /usr/server/migrations && npm link
CMD ["npm", "run", "start"]