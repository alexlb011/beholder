
ARG MODE=dev


#dev mode
FROM node:20-alpine AS dev
WORKDIR /app
COPY . .

RUN rm -rf node_modules src package.json package-lock.json
COPY ./docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

CMD ["sh", "-c", "/usr/local/bin/docker-entrypoint.sh"]


#prod mode
FROM node:20-alpine AS prod
WORKDIR /app
COPY . .
RUN npm i



FROM ${MODE}