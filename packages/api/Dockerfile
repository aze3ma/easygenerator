FROM node:18.20-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
COPY packages/api/package.json ./packages/api/

RUN npm install

COPY packages/api .

EXPOSE 8080

CMD [ "npm", "run", "start:dev" ]
