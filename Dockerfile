FROM node:lts

WORKDIR /app
COPY . /app
RUN npm ci

ENTRYPOINT ["npm", "start"]
