FROM node:12-alpine

COPY . .

RUN npm install --silent
RUN npm run build

RUN npm install -g serve
CMD serve -s build

EXPOSE 5000
