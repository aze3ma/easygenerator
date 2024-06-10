FROM node:18.20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY packages/web/package*.json ./packages/web/

RUN npm install --legacy-peer-deps

COPY packages/web .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
