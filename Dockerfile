FROM node:lts

WORKDIR /usr/src/cnes-graphql
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD npm run build && npm run start