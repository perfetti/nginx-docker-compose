FROM ghcr.io/perfetti/react1-app:latest as react-app

FROM nginx:alpine
COPY --from=react-app /usr/share/nginx/html /react-app
COPY default.conf /etc/nginx/conf.d/default.conf
