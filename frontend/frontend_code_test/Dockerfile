FROM node:20-alpine

WORKDIR /app

RUN npm install typescript 
COPY package*.json ./
RUN npm install    

COPY . .
RUN npm run build

EXPOSE 5173
ENTRYPOINT [ "npm", "run", "dev" ]