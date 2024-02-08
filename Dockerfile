FROM node
COPY main.js main.js
COPY package-lock.json package-locj.json
COPY package.json package.json

RUN npm install
ENTRYPOINT [ "node","main.js" ]