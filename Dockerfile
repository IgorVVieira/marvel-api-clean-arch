FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install -g @nestjs/cli
RUN npm install

COPY . .
RUN cp .env.example .env

EXPOSE 3000

CMD ["npm", "run", "start:dev"]