FROM nginx:1.19.3
WORKDIR /app
COPY . /app
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]