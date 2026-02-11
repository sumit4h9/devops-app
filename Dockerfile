#---------Build stage---------
FROM node:18-alpine As builder

WORKDIR /app

COPY package*.json ./ 
RUN npm install

COPY . .
RUN npm run build

#--------production stage---------------

FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/index.js"]