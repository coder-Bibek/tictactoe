FROM node:alpine as builder

WORKDIR /usr/app

COPY package.json yarn.lock  /usr/app/

RUN yarn install --frozen-lockfile

COPY . /usr/app/

RUN yarn build


FROM nginx:1.20.0-alpine

COPY apps/app/docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/app/build /usr/share/nginx/html
