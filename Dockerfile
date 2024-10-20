FROM node:lts

WORKDIR /app

COPY src /app/src
COPY tests /app/tests
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm ci
RUN npm test

ENTRYPOINT ["npm", "start"]
