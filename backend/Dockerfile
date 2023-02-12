FROM node:18-alpine as backend_node 
ARG ENVIRONMENT
WORKDIR /backend
COPY package.json ./
ADD . ./
RUN echo "npm install --silent" > 'init.sh' 
RUN echo "npm run build" >> 'init.sh'
RUN echo "npm run migrate" >> 'init.sh'
RUN echo "npm run prod" >> 'init.sh'
RUN chmod +x init.sh
CMD ["sh", "init.sh"]


