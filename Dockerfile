FROM node:17.5.0

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "node", "server", "app" ]