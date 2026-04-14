FROM ghcr.io/gohugoio/hugo:v0.160.1 AS builder
USER root
WORKDIR /app
COPY . .
RUN mkdir -p /app/public && hugo build --ignoreCache --minify -s /app -d /app/public

FROM nginx:1.29.8
COPY --from=builder --chown=root:root /app/public /usr/share/nginx/html
EXPOSE 80

