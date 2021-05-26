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
COPY ./package-lock.json /app/package-lock.json

CMD ["npm", "run", "build-site"]

COPY ./babel.config.js /app/babel.config.js
COPY ./docusaurus.config.js /app/docusaurus.config.js
COPY ./package.json /app/package.json
COPY ./sidebars.js /app/sidebars.js
COPY ./package-lock.json /app/package-lock.json
