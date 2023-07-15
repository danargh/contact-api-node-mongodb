FROM node:18

# create app directory 
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# bundle app source
COPY . .

# expose port 3000
EXPOSE 3000

# start app
CMD ["node", "server.js"]