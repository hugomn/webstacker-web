FROM node:8-alpine
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .
RUN PUBLIC_PATH=$WORKDIR node --max_old_space_size=16384 /usr/local/bin/npm run build

EXPOSE 8080
CMD PORT=8080 npm start
