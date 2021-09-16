FROM node:12

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

CMD yarn dev

EXPOSE 8005