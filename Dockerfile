FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY ./html /usr/share/nginx/html
COPY ./assets /usr/share/nginx/html/assets 