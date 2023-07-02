FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

RUN cp .env.example .env

EXPOSE 3000

CMD ["npm", "run", "start:dev"]