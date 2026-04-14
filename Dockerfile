FROM ghcr.io/gohugoio/hugo:v0.160.1 AS builder
COPY --chown=hugo:hugo . .
RUN hugo build --ignoreCache --minify -s . -d /tmp/out

FROM nginx:1.29.8
COPY --from=builder --chown=root:root /tmp/out /usr/share/nginx/html
EXPOSE 80

