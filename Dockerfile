FROM node:lts

WORKDIR /app

EXPOSE 3000 35729
COPY ./components /app/components
COPY ./docs /app/docs
COPY ./src /app/src
COPY ./static /app/static
COPY ./babel.config.js /app/babel.config.js
COPY ./docusaurus.config.js /app/docusaurus.config.js
COPY ./package.json /app/package.json
COPY ./sidebars.js /app/sidebars.js
COPY ./yarn.lock /app/yarn.lock

CMD ["yarn", "run", "build-and-serve"]

COPY ./babel.config.js /app/babel.config.js
COPY ./docusaurus.config.js /app/docusaurus.config.js
COPY ./package.json /app/package.json
COPY ./sidebars.js /app/sidebars.js
COPY ./yarn.lock /app/yarn.lock
