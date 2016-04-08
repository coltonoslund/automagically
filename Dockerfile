FROM node:0.12
RUN	mkdir /app
WORKDIR	/app
COPY	. /app
RUN	npm install
CMD	["npm", "start"]
