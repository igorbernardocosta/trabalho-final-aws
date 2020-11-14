FROM node:alpine

WORKDIR /node-app/api-products

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3002

CMD ["node", "index.js"]