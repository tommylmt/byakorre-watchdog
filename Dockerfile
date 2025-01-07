FROM node:23-alpine

RUN apk update && apk upgrade --no-cache
RUN apk add --no-cache \
    udev \
    ttf-freefont \
    chromium

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

WORKDIR /srv/app/

COPY . .

RUN chmod -R 777 ./
RUN npm install