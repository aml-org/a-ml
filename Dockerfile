FROM node:lts

WORKDIR /app/website

EXPOSE 3000 35729
COPY ./components /app/components
COPY ./docs /app/docs
COPY ./website /app/website
RUN yarn install

CMD ["yarn", "start"]
