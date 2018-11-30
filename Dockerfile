FROM mhart/alpine-node:11.3

WORKDIR /opt/panini-calculator

COPY . /opt/panini-calculator

RUN npm install && \
	npm run webpack

CMD npm run webpack-dev-server