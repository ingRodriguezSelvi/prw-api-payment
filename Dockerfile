FROM --platform=linux/amd64 node:16-alpine AS builder
WORKDIR /payment
RUN apk add --update --no-cache
RUN apk add python3
RUN apk add make
RUN apk add g++
COPY . .
RUN npm install
RUN npm run build
RUN ls

FROM --platform=linux/amd64 node:16-alpine AS dependencies
WORKDIR /payment
RUN apk add --update --no-cache
RUN apk add python3
RUN apk add make
RUN apk add g++
COPY . .
RUN npm install --omit=dev
RUN ls

FROM --platform=linux/amd64 node:16-alpine3.16 as runtime
ENV NODE_ENV=production
RUN apk add --no-cache tini
WORKDIR /payment
RUN chown node:node .
USER node
COPY --from=builder ./payment/build .
COPY --from=dependencies ./payment/node_modules ./node_modules
EXPOSE 3000
RUN ls
ENTRYPOINT ["node", "src/app.js"]
